#!/usr/bin/env python3
"""Rebuild search/gnarmpfsk-index.json, the text of every scanned document.

The GNARMPFSK page's search box looks inside the scans using this index: the
text of each page of each Google Drive document listed in
_data/gnarmpfsk.yml. Most PDFs on Drive carry an invisible text layer (added
with ocrmypdf when they were uploaded), which is read as it is, so the site's
search agrees with Drive's own; anything without one is read with Tesseract.
See README.md in this folder for when to run it.

By default only documents that are not in the index yet are read, so adding a
newsletter takes about a minute. Documents removed from gnarmpfsk.yml are
dropped from the index.

    python3 tools/gnarmpfsk/build_search_index.py                # new documents only
    python3 tools/gnarmpfsk/build_search_index.py --refresh ID   # a file replaced on Drive
    python3 tools/gnarmpfsk/build_search_index.py --all          # everything, from scratch

Needs Python 3 with pdfminer.six, Tesseract and Ghostscript.
"""
import argparse
import datetime
import gzip
import json
import os
import re
import subprocess
import sys
import tempfile
import urllib.request
from concurrent.futures import ProcessPoolExecutor

try:
    from pdfminer.high_level import extract_text
    from pdfminer.pdfpage import PDFPage
except ImportError:
    sys.exit('needs pdfminer: pip3 install pdfminer.six')

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LISTING = os.path.join(REPO, '_data', 'gnarmpfsk.yml')
INDEX = os.path.join(REPO, 'search', 'gnarmpfsk-index.json')
DOWNLOAD = 'https://drive.usercontent.google.com/download?id={}&export=download&confirm=t'
DPI = '300'
# A text layer with less than this many letters in the whole document is a
# failed or partial one; read the page images instead.
MIN_CHARS = 200

# Runs of punctuation are OCR speckle from the mimeograph texture; they bloat
# the index without ever being searched for.
SPECKLE = re.compile(r'(?<![A-Za-z0-9])[^\w\s]{2,}(?![A-Za-z0-9])')
# The index is a public file, so no personal email address goes into it, even
# one a scan happens to print (see commit 710786f). The club's own lists,
# mitoc-ab@mit.edu and the like, are meant to be found and stay.
EMAIL = re.compile(r'[\w.+-]+@[\w-]+(?:\.[\w-]+)+')
CLUB_EMAIL = re.compile(r'mitoc[\w.-]*@mit\.edu$', re.I)


def strip_personal_emails(text):
    found = []

    def drop(m):
        if CLUB_EMAIL.match(m.group(0)):
            return m.group(0)
        found.append(m.group(0))
        return ''
    return EMAIL.sub(drop, text), found


def listed_ids():
    """Drive IDs in _data/gnarmpfsk.yml, in order. Only these are indexed:
    a document the site lists is already public, and nothing else is."""
    return re.findall(r'^  - drive: (\S+)', open(LISTING).read(), re.M)


def clean(text):
    text = SPECKLE.sub(' ', text)
    text = text.replace('’', "'").replace('‘', "'")
    text = text.replace('“', '"').replace('”', '"')
    # Join words the original broke across a line with a hyphen.
    text = re.sub(r'(\w)-\s*\n\s*(\w)', r'\1\2', text)
    return re.sub(r'\s+', ' ', text).strip()


def tesseract(image):
    r = subprocess.run(['tesseract', image, '-', '--psm', '6'],
                       capture_output=True, text=True, errors='replace')
    return r.stdout


def text_layer(pdf):
    """The text a PDF already carries, one string per page, or None when it
    has no usable layer."""
    try:
        with open(pdf, 'rb') as f:
            count = sum(1 for _ in PDFPage.get_pages(f))
        # pdfminer, not `gs -sDEVICE=txtwrite`: on ocrmypdf output txtwrite
        # returns the words of a page out of order.
        pages = [extract_text(pdf, page_numbers=[n]) for n in range(count)]
    except Exception:                           # noqa: BLE001 -- fall back to OCR
        return None
    if sum(len(''.join(p.split())) for p in pages) < MIN_CHARS:
        return None
    return pages


def ocr(pdf_or_image, workdir, is_pdf):
    if is_pdf:
        subprocess.run(['gs', '-q', '-dNOPAUSE', '-dBATCH', '-sDEVICE=pnggray', '-r' + DPI,
                        '-sOutputFile=' + os.path.join(workdir, 'p_%04d.png'), pdf_or_image],
                       capture_output=True, check=True)
        images = sorted(os.path.join(workdir, p) for p in os.listdir(workdir) if p.startswith('p_'))
    else:
        images = [pdf_or_image]
    return [tesseract(img) for img in images]


def read_document(fid):
    """Download one Drive file and return (cleaned text of each page, how it
    was read)."""
    with tempfile.TemporaryDirectory() as td:
        src = os.path.join(td, 'source')
        with urllib.request.urlopen(DOWNLOAD.format(fid), timeout=120) as r, open(src, 'wb') as f:
            f.write(r.read())
        head = open(src, 'rb').read(8)
        if head.startswith(b'%PDF'):
            raw, how = text_layer(src), 'text layer'
            if raw is None:
                raw, how = ocr(src, td, True), 'tesseract'
        elif head.startswith((b'\xff\xd8', b'\x89PNG')):
            raw, how = ocr(src, td, False), 'tesseract'
        else:
            # Drive answers a file that is not shared publicly with a sign-in page.
            raise RuntimeError('not a PDF or image -- is the file shared as "Anyone with the link"?')
    pages = [clean(p) for p in raw]
    while pages and not pages[-1]:              # trailing blank scans
        pages.pop()
    return pages, how


def read_safely(fid):
    try:
        pages, how = read_document(fid)
        return fid, pages, how, None
    except Exception as e:                      # noqa: BLE001 -- reported, not fatal
        return fid, None, None, str(e)


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n\n')[0])
    ap.add_argument('--refresh', nargs='+', default=[], metavar='ID',
                    help='read these documents again, e.g. after replacing the file on Drive')
    ap.add_argument('--all', action='store_true', help='read every document again')
    ap.add_argument('--out', default=INDEX, help='where to write the index (default: %(default)s)')
    ap.add_argument('--jobs', type=int, default=4, help='documents read at once (default: 4)')
    args = ap.parse_args()

    ids = listed_ids()
    try:
        old = json.load(open(INDEX))['docs']
    except (OSError, ValueError, KeyError):
        old = {}
    unknown = [i for i in args.refresh if i not in ids]
    if unknown:
        sys.exit('not in _data/gnarmpfsk.yml: ' + ', '.join(unknown))

    todo = [i for i in ids if args.all or i in args.refresh or i not in old]
    print('%d documents listed, %d to read' % (len(ids), len(todo)), flush=True)

    fresh, failed, ways = {}, [], {}
    with ProcessPoolExecutor(max_workers=args.jobs) as ex:
        for n, (fid, pages, how, err) in enumerate(ex.map(read_safely, todo), 1):
            if err:
                failed.append((fid, err))
                print('  [%d/%d] %s FAILED: %s' % (n, len(todo), fid, err), flush=True)
            else:
                fresh[fid] = pages
                ways[how] = ways.get(how, 0) + 1
                if n % 10 == 0 or n == len(todo):
                    print('  [%d/%d] read' % (n, len(todo)), flush=True)
    if ways:
        print('  read from: ' + ', '.join('%s %d' % kv for kv in sorted(ways.items())))

    docs, blank, emails = {}, [], []
    for fid in ids:
        pages = fresh.get(fid, old.get(fid))
        if pages is None:
            continue                            # failed and never indexed before
        if not any(pages):
            blank.append(fid)                   # a photo or a drawing: nothing to search
            continue
        kept = []
        for p in pages:
            p, found = strip_personal_emails(p)
            emails += found
            kept.append(p)
        docs[fid] = kept

    dropped = sorted(set(old) - set(ids))
    if docs == {k: old[k] for k in old if k in ids} and not dropped and os.path.abspath(args.out) == INDEX:
        print('nothing changed; %s left as it is' % os.path.relpath(INDEX, REPO))
    else:
        index = {'generated': datetime.date.today().isoformat(),
                 'documents': len(docs), 'pages': sum(len(p) for p in docs.values()), 'docs': docs}
        data = json.dumps(index, ensure_ascii=False, separators=(',', ':')).encode()
        with open(args.out, 'wb') as f:
            f.write(data)
        print('wrote %s: %d documents, %d pages, %.2f MB (%.0f KB gzipped)'
              % (os.path.relpath(args.out, REPO), index['documents'], index['pages'],
                 len(data) / 1e6, len(gzip.compress(data)) / 1e3))
    if dropped:
        print('  dropped %d documents no longer in gnarmpfsk.yml' % len(dropped))
    if blank:
        print('  %d documents have no readable text (photos, drawings): %s' % (len(blank), ' '.join(blank)))
    if emails:
        print('  removed %d personal email addresses from the text -- the scans on Drive still'
              ' show them: %s' % (len(emails), ', '.join(sorted(set(emails)))))
    if failed:
        print('  %d documents could not be read and kept their old text, if any:' % len(failed))
        for fid, err in failed:
            print('     %s: %s' % (fid, err))
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())

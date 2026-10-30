# GNARMPFSK search index

`search/gnarmpfsk-index.json` holds the text of every page of every scanned
document on the [GNARMPFSK page](https://mitoc.mit.edu/about/gnarmpfsk). It is
what lets the search box find words *inside* the scans, not just in their
titles. `build_search_index.py` rebuilds it.

## When to run it

- **After adding a scanned document** to `_data/gnarmpfsk.yml` (an entry with
  `drive:`). Until you do, the new document still shows up and its title, date
  and type are searchable; only the text inside the scan is not.
- **After replacing a file on Google Drive** (for example to redact something),
  with `--refresh` and that file's Drive ID.
- **After removing a document** from `_data/gnarmpfsk.yml`, so its text leaves
  the index too.

Nothing else needs it. Stories and transcribed articles are pages in this
repository, and Jekyll puts their text into the page when the site is built.
News article links are searched by their title and summary.
`search/gallery-index.json`, for the old photo gallery, is a different file and
does not need rebuilding: the gallery has not changed since 2017.

## How

Once, install the tools (on a Mac with [Homebrew](https://brew.sh)):

```sh
brew install tesseract ghostscript
pip3 install pdfminer.six
```

Then, from the root of the repository:

```sh
python3 tools/gnarmpfsk/build_search_index.py                # read new documents only
python3 tools/gnarmpfsk/build_search_index.py --refresh ID   # read one document again
python3 tools/gnarmpfsk/build_search_index.py --all          # read everything again (~15 min)
```

Commit `search/gnarmpfsk-index.json` together with the change to
`_data/gnarmpfsk.yml`.

## What it does

For each Drive ID in `_data/gnarmpfsk.yml` it downloads the file and reads its
text. Most of the PDFs carry an invisible text layer, added with ocrmypdf
before they were uploaded, and that is used as it is, so the site's search
finds what Drive's own search finds. A file without one is read with Tesseract
from 300 dpi page images. The text is tidied (scanner speckle removed, words
broken across lines rejoined) and written as one string per page.

The download needs no Google account, so a file must be shared as "Anyone with
the link can view", which every document on the page already is. One that is
not is reported and keeps whatever text it had.

## Privacy

The index is a public file anyone can download, and it is plain text, so it is
easier to harvest than the scans themselves.

- Only documents listed in `_data/gnarmpfsk.yml` are indexed. Listing a
  document makes its text public in a way the scan alone does not.
- Personal email addresses are removed from the text automatically, and the
  script names any it removed. They are still visible in the scan on Drive,
  though; decide whether the file itself should be redacted (see commit
  710786f for how that was done).
- The club's own list addresses, `mitoc-ab@mit.edu` and the like, are kept.

# How to add a Camelot bunkhouse update

Updates appear at `/camelot/updates`, newest first. The newest one also shows on Home under "Latest update".

## 1. Add the photos

Two folders, with the same subfolders:

- `images/bunkhouse/Images and assets/`: full-size originals. **Not in git** (it's in `.gitignore`), so keep a copy somewhere shared, such as the committee's drive.
- `images/bunkhouse/compressed/`: the web copies the site links to. Same subfolders and file names, lowercased, with spaces and " - " turned into hyphens. For example, `2025-05 Replanting day/replanting - group shot.jpg` becomes `2025-05-replanting-day/replanting-group-shot.jpg`.

For each new photo:

1. Put the original in a dated subfolder of `Images and assets/` (for example `2027-05 Phase 2 groundbreaking/`).
2. Make the web copy. Photos are 1600 px on the long edge at quality 68, usually 0.7–1 MB. On a Mac:
   `sips -Z 1600 -s formatOptions 68 "Images and assets/2027-05 Phase 2 groundbreaking/site - wide.jpg" --out compressed/2027-05-phase-2-groundbreaking/site-wide.jpg`
   (run inside `images/bunkhouse/`, after `mkdir -p` for the new subfolder). If the copy comes out larger than the original, use the original.
3. For the post's thumbnail on the list page, also make a small copy: `-Z 640 -s formatOptions 60`, saved with `-thumb` before `.jpg`.

Drawings (PNG) are saved as JPEG at 2400 px, quality 80: `sips -Z 2400 -s format jpeg -s formatOptions 80 …`.

## 2. Add the post

Create `_camelot_updates/YYYY-MM-DD-short-name.md`. The part after the date becomes the URL (`/camelot/updates/short-name/`). In GitHub's web editor, use **Add file → Create new file** inside `_camelot_updates`.

```markdown
---
title: "Groundbreaking on Phase 2"
date: 2027-05-15          # only the month and year are shown
summary: "One sentence for the list page and Home."
image: /images/bunkhouse/compressed/2027-05-phase-2-groundbreaking/site-wide-thumb.jpg   # optional thumbnail
raised: 1300000           # optional: shows "Raised so far: $1,300,000"
---

What happened, in a paragraph or two.

<figure class="bunkhouse-figure camelot-update-photo-wide">
  <img src="/images/bunkhouse/compressed/2027-05-phase-2-groundbreaking/site-wide.jpg" alt="Describe the photo for screen readers" loading="lazy">
  <figcaption>Caption shown under the photo.</figcaption>
</figure>
```

To place two photos side by side (stacked on phones), wrap two `<figure class="bunkhouse-figure">` elements in `<div class="camelot-update-photos">`. If one is portrait and one is landscape, use `<div class="camelot-update-photos camelot-update-photos-crop">` so both are cropped to squares and line up.

A good post covers: what happened, photos, what's been raised since the last post, what's next, and one ask (usually Donate).

## 3. Update the thermometer at the same time

In `_data/bunkhouse_settings.yml`: `donations_amount`, `number_donors`, `donations_as_of`.

## Upkeep

Aim for a post every three to four months, plus one at each milestone (full funding, groundbreaking, completion).

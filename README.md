# MITOC Website

This repository contains the source code of https://mitoc.mit.edu. 

All members of the MITOC community are welcome to suggest edits by opening pull requests!

If you'd like to change anything on the website, you can:
- Read the rest of this short document to figure out how things work
- Suggest a change on a file by clicking on the "Edit this file" button (see screenshot below). This will open a Pull Request (PR), which the webmasters will review. When the PR gets accepted and merged to the `master` version of the code, it will trigger an automatic deployment.
- Don't hesitate to contact the MITOC webmasters (mitoc-webmasters@mit.edu) if you need any help!

![Screen Shot 2019-11-16 at 8 16 03 PM](https://user-images.githubusercontent.com/11834997/69001621-fcb15300-08af-11ea-81cb-b698ac23825c.png)

## General

The website is built using [Jekyll](https://jekyllrb.com/), a static site generator.


## Content edition

### What to edit

The website content is located in the following directories:
- [`_pages`](/_pages) for pages
- [`images`](/images) for images and pictures
- [`docs`](/docs) for other static files (e.g. PDF documents)
- [`_data`](/_data) for structured data used by the website. This includes:
  - [Menu items](_data/menu.yml)
  - Club [positions](_data/positions.yml) and [officers](_data/officers.yml)
  - [Trip fees](_data/trip_fees.yml)
  - [Gear rental prices and deposit](_data/gear_prices.yml)
    - _Note that this file is not connected to the gear database, and that prices updates must separately be applied there._

The organization of the `_pages` folder follows the URL schema: the source of the [/activities/sea-kayak](https://mitoc.mit.edu/activities/sea-kayak) page is [`_pages/activities/sea-kayak.md`](_pages/activities/sea-kayak.md).

### Syntax

Page content is written in [Markdown](https://www.markdownguide.org/basic-syntax/), the same markup language that we use for the MITOC Wiki.

On top of each page file, a "front matter" can also be found. It defines metadata about the page using the [YAML](https://lzone.de/cheat-sheet/YAML) format.

`_data` files are also written in YAML.

### Advanced - Use of HTML tags in Markdown

HTML tags can be included in Markdown files, but that should be used with moderation, and only for things that cannot be done just with Markdown.

For instance, to color a word: 

```HTML
This <span style="color:red;">word</span> is red.
```

Or to apply an specific style to a block:

```HTML
<div class="well" markdown="1">

#### Can I reserve gear ahead of time?

No. Aside from official MITOC-run trips, all gear is first come, first served.

</div>
```

> Note the use of `markdown="1"`: this is necessary to render the Markdown located in the tag.

The styled class `well`, as well are many others, are brought by [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/). This library allows use to use predefined styles just by adding a `class` attribute to a block.

Custom styled class can be defined in [./css/mitoc.css](./css/mitoc.css).

### Advanced - Templating

Tags starting by `{{` or `{%` are templating tags. They allow to put bits of HTML together, define reusables components, loop over data, etc.

If you're curious about that, please refer to:
- The [Jekyll doc](https://jekyllrb.com/docs/liquid/)
- The [`jekyll-jolt` plugin](https://github.com/helpscout/jekyll-jolt#documentation) docs


## Live deployment

All branches (draft versions of the website) are automatically deployed to preview changes. A branch named `test` would be deployed on the domain https://test--mitoc.netlify.com/.

Branch deployment should not take more than 2 minutes. 

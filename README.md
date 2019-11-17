# MITOC Website

This repository contains the source code of https://mitoc.mit.edu. 

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
- The [Jekyll Liquid doc](https://jekyllrb.com/docs/liquid/)
- The [`jekyll-jolt` plugin](https://github.com/helpscout/jekyll-jolt#documentation) docs


## Live deployment

All branches (draft versions of the website) are automatically deployed to preview changes. A branch named `test` would be deployed on the domain https://test--mitoc.netlify.com/.

Branch deployment should not take more than 2 minutes. 

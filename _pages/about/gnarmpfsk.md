---
    permalink: /about/gnarmpfsk
    title: GNARMPFSK
    # PDFs are listed in _data/gnarmpfsk.yml and hosted on Google Drive.
    # Pages under _pages/about/gnarmpfsk/ with a `type` (stories, photo galleries)
    # are listed too.
---

GNARMPFSK---the sound made by a newly-awoken hiker in a wet sleeping bag on a frosty morning, as they realize that if they are to have any hot chocolate they are going to have to get up and make it themselves---is MITOC's newsletter!

Here, you can read (a selection of) GNARMPFSK newsletters, as well as more recent stories from current and former MITOC'ers!

Every scanned page has been put through text recognition, so the search box below looks *inside* the documents, not just at their titles. The recognition is good but not perfect---these are mimeographs from the 1940s---so an occasional word will be garbled beyond finding.

Contact [mitoc-owner@mit.edu](mailto:mitoc-owner@mit.edu) to add your own trip report!

For other cool stories, also check out the [Sean A. Collier Adventure Grant](https://mitoc-cag.mit.edu/), the [trip report archive (1946-2017)](/legacy-gallery/), or the [tech archive](/about/gnarmpfsk/tech-archive)!


<style>
  .archive-controls { margin: 20px 0; }
  .archive-controls .form-group { margin-right: 20px; margin-bottom: 10px; vertical-align: top; }
  .archive-types .btn { margin: 0 4px 4px 0; }
  .archive-list { display: flex; flex-wrap: wrap; margin: 0 -15px; }
  .archive-doc { margin-bottom: 30px; }
  .archive-doc h4 { margin-bottom: 4px; }
  .archive-doc h4 a { color: inherit; }
  .archive-meta { margin-bottom: 8px; color: #777; }
  .archive-meta .label { margin-left: 4px; }
  .archive-thumbs { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 8px; }
  .archive-thumbs img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; background: #eee; }
  .archive-excerpt { font-size: 16px; line-height: 1.6; }
  /* Full-text hits from the OCR'd scans. */
  .archive-hits { margin-bottom: 8px; padding: 8px 12px; background: #f6f6f6; border-left: 3px solid #337ab7; font-size: 14px; }
  .archive-hits p { margin: 0 0 4px; color: #555; }
  .archive-hits p:last-child { margin-bottom: 0; }
  .archive-hits .archive-hit-where { font-weight: bold; color: #337ab7; }
  .archive-search-status { font-style: italic; }
  /* The search box on its own line, with the other filters folded away behind
     "Advanced search" until they are wanted. */
  .archive-search-row { display: flex; flex-wrap: wrap; gap: 8px; max-width: 640px; }
  .archive-search-row input { flex: 1 1 240px; min-width: 0; }
  #archive-advanced-toggle .badge { margin-left: 2px; background: #337ab7; }
  /* Bootstrap's .badge and .btn set their own display, which would otherwise
     beat the `hidden` attribute the script uses to show and hide them. */
  .archive-controls [hidden], .gallery-results [hidden] { display: none !important; }
  .archive-advanced { margin-top: 12px; padding: 15px 15px 5px; background: #f7f7f7; border: 1px solid #e3e3e3; border-radius: 4px; }
  /* On a phone the three "Search in" buttons would wrap apart; keep them one
     row and let their labels wrap instead. */
  @media (max-width: 480px) {
    #archive-scope { display: flex; width: 100%; }
    #archive-scope .btn { flex: 1 1 0; white-space: normal; }
  }
  /* Albums from the S3 photo gallery, listed below the documents. */
  .gallery-results { margin: 10px 0 30px; padding-top: 10px; border-top: 1px solid #e5e5e5; }
  .gallery-results.gallery-only { margin-top: 0; padding-top: 0; border-top: 0; }
  .gallery-results .archive-hits a { color: inherit; }
  .gallery-path { display: block; margin-top: 2px; font-size: 13px; }
  mark { padding: 0; background: #fff3a3; }
  .archive-article { display: block; margin-bottom: 8px; }
  .archive-note { margin: 4px 0 0; }
  .archive-article img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; background: #eee; }
  /* A document's viewer is only mounted while it is near the viewport. */
  .archive-embed { background: #f2f2f2; border: 1px solid #e0e0e0; }
  .archive-embed-idle { position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                        display: flex; align-items: center; justify-content: center;
                        padding: 0 16px; color: #999; font-size: 13px; text-align: center; }
  /* Two-handle year slider: two range inputs stacked on one track. */
  .year-range { position: relative; width: 260px; max-width: 100%; height: 22px; }
  .year-range-track { position: absolute; left: 0; right: 0; top: 9px; height: 4px; border-radius: 2px; background: #ddd; }
  .year-range-fill { position: absolute; top: 0; bottom: 0; background: #337ab7; border-radius: 2px; }
  /* Rough count of documents per year, sitting on top of the slider. */
  .year-hist { display: flex; align-items: flex-end; width: 260px; max-width: 100%;
               height: 24px; margin-bottom: 0; }
  .year-hist span { flex: 1 1 0; min-width: 0; min-height: 1px; background: #cfd8e3; }
  .year-hist span.in-range { background: #337ab7; }
  .year-range input[type=range] { position: absolute; left: 0; top: 0; width: 100%; height: 22px; margin: 0; background: none; pointer-events: none; -webkit-appearance: none; appearance: none; }
  .year-range input[type=range]::-webkit-slider-runnable-track { background: none; }
  .year-range input[type=range]::-moz-range-track { background: none; }
  .year-range input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; pointer-events: auto; width: 20px; height: 20px; border-radius: 50%; background: #fff; border: 2px solid #337ab7; cursor: pointer; }
  .year-range input[type=range]::-moz-range-thumb { pointer-events: auto; width: 16px; height: 16px; border-radius: 50%; background: #fff; border: 2px solid #337ab7; cursor: pointer; }
  .year-range input[type=range]:focus-visible { outline: none; }
  .year-range input[type=range]:focus-visible::-webkit-slider-thumb { box-shadow: 0 0 0 3px rgba(51, 122, 183, 0.4); }
  .year-range input[type=range]:focus-visible::-moz-range-thumb { box-shadow: 0 0 0 3px rgba(51, 122, 183, 0.4); }
</style>

{% assign data = site.data.gnarmpfsk %}
{% assign pages = site.pages | where_exp: "p", "p.url contains '/about/gnarmpfsk/'" | where_exp: "p", "p.type" %}
{% assign docs = data.documents | concat: pages | sort: "date" | reverse %}

<form class="archive-controls" onsubmit="return false">
  <label for="archive-search">Search <small class="text-muted">(inside the full text too)</small></label>
  <div class="archive-search-row">
    <input type="search" id="archive-search" class="form-control" placeholder="Intervale, hearse, Katahdin&hellip;" autocomplete="off">
    <button type="button" class="btn btn-default" id="archive-advanced-toggle" aria-expanded="false" aria-controls="archive-advanced">
      Advanced search <span class="badge" id="archive-advanced-count" hidden></span> <span class="caret"></span>
    </button>
  </div>
  {% comment %}Where to search, type, years and sort: folded away until asked for.{% endcomment %}
  <div class="archive-advanced form-inline" id="archive-advanced" hidden>
    <div class="form-group">
      <label id="archive-scope-label">Search in <small class="text-muted">(the <a href="/legacy-gallery/">photo gallery</a> has 3,418 albums, 2004&ndash;2017)</small></label><br>
      <div class="btn-group" role="group" aria-labelledby="archive-scope-label" id="archive-scope">
        <button type="button" class="btn btn-default active" data-scope="archive" aria-pressed="true">Newsletters &amp; stories</button>
        <button type="button" class="btn btn-default" data-scope="both" aria-pressed="false">Both</button>
        <button type="button" class="btn btn-default" data-scope="gallery" aria-pressed="false">Photo gallery</button>
      </div>
    </div>
    <div class="form-group">
      <label>Type <small class="text-muted">(pick one)</small></label><br>
      <div class="archive-types" role="group" id="archive-types">
        <button type="button" class="btn btn-default active" data-type="" aria-pressed="true">All</button>
        {% for type in data.types %}
        <button type="button" class="btn btn-default" data-type="{{ type }}" aria-pressed="false">{{ type }}</button>
        {% endfor %}
      </div>
    </div>
    {% assign dated = docs | where_exp: "d", "d.date" %}
    {% assign first_year = dated.last.date | slice: 0, 4 %}
    {% assign last_year = dated.first.date | slice: 0, 4 %}
    <div class="form-group">
      <label id="archive-years-label">Years: <span id="archive-years-value">{{ first_year }}–{{ last_year }}</span></label><br>
      <div class="year-hist" id="archive-year-hist" aria-hidden="true"></div>
      <div class="year-range">
        <div class="year-range-track"><div class="year-range-fill" id="archive-years-fill"></div></div>
        <input type="range" id="archive-year-from" min="{{ first_year }}" max="{{ last_year }}" step="1" value="{{ first_year }}" aria-label="From year">
        <input type="range" id="archive-year-to" min="{{ first_year }}" max="{{ last_year }}" step="1" value="{{ last_year }}" aria-label="To year">
      </div>
    </div>
    <div class="form-group">
      <label for="archive-sort">Sort by</label><br>
      <select id="archive-sort" class="form-control">
        <option value="date-desc">Date (newest first)</option>
        <option value="date-asc">Date (oldest first)</option>
        <option value="type">Type (A–Z)</option>
      </select>
    </div>
  </div>
</form>

<p id="archive-count" class="text-muted">{{ docs.size }} documents</p>
<p id="archive-search-note" class="text-muted archive-search-status" hidden></p>

{% comment %}
  Card data for every document. The first `card_limit` are rendered as HTML
  below for a fast first paint and a no-JS fallback; the rest live only in
  this JSON blob until the sentinel at the bottom of the list scrolls into
  view. Any field present in a card below (image, excerpt, thumbs, etc.)
  must be emitted here too, or the JS-rendered version will not match.
{% endcomment %}
{% assign card_limit = 16 %}
{%- capture archive_data_json -%}
[
{%- for doc in docs -%}
  {%- if forloop.index > 1 -%},{%- endif -%}
  {%- if doc.drive -%}{%- capture d_url -%}https://drive.google.com/file/d/{{ doc.drive }}/view{%- endcapture -%}
  {%- elsif doc.link -%}{%- assign d_url = doc.link -%}
  {%- else -%}{%- assign d_url = doc.url -%}{%- endif -%}
  {%- assign card_image = doc.clipping -%}
  {%- if doc.image -%}{%- assign card_image = doc.image -%}{%- endif -%}
  {%- unless card_image -%}
    {%- assign after_img = doc.content | split: '<img ' -%}
    {%- if after_img.size > 1 -%}
      {%- assign after_src = after_img[1] | split: 'src="' -%}
      {%- if after_src.size > 1 -%}{%- assign card_image = after_src[1] | split: '"' | first -%}{%- endif -%}
    {%- endif -%}
  {%- endunless -%}
  {%- capture excerpt -%}{%- unless doc.drive or doc.link or doc.thumbnails -%}{{ doc.content | markdownify | strip_html | truncatewords: 70 }}{%- endunless -%}{%- endcapture -%}
  {%- capture haystack -%}{{ doc.title }} {{ doc.author }} {{ doc.source }} {{ doc.summary }} {{ doc.note }} {{ doc.date_display }} {{ doc.type }}{%- endcapture -%}
  {"title":{{ doc.title | jsonify }},"url":{{ d_url | strip | jsonify }},"search":{{ haystack | strip_newlines | strip | downcase | jsonify }}
  {%- if doc.date -%},"date":{{ doc.date | date: "%Y-%m-%d" | jsonify }}{%- endif -%}
  {%- if doc.date_display -%},"display":{{ doc.date_display | jsonify }}{%- endif -%}
  {%- if doc.type -%},"type":{{ doc.type | jsonify }}{%- endif -%}
  {%- if doc.author -%},"author":{{ doc.author | jsonify }}{%- endif -%}
  {%- if doc.source -%},"source":{{ doc.source | jsonify }}{%- endif -%}
  {%- if doc.summary -%},"summary":{{ doc.summary | jsonify }}{%- endif -%}
  {%- if doc.note -%},"note":{{ doc.note | jsonify }}{%- endif -%}
  {%- if card_image -%},"image":{{ card_image | jsonify }}{%- endif -%}
  {%- if doc.drive -%},"drive":{{ doc.drive | jsonify }}{%- endif -%}
  {%- if doc.link -%},"link":true{%- endif -%}
  {%- unless doc.drive or doc.link -%}{%- if doc.url -%},"page":{{ doc.url | jsonify }}{%- endif -%}{%- endunless -%}
  {%- if doc.thumbnails -%},"thumbs":{{ doc.thumbnails | jsonify }}{%- endif -%}
  {%- if excerpt != "" -%},"excerpt":{{ excerpt | jsonify }}{%- endif -%}
  }
{%- endfor -%}
]
{%- endcapture -%}
{%- comment -%}
  Any `</` inside the JSON (e.g. an OCR'd fragment that lands on a slash
  after an angle-bracket) would otherwise close the <script> tag early.
  Rewriting it to `<\/` keeps JSON.parse happy -- `\/` is a valid escape
  for `/` -- while hiding the sequence from the HTML tokenizer.
{%- endcomment -%}
<script id="archive-data" type="application/json">{{ archive_data_json | replace: '</', '<\/' }}</script>

<div class="archive-list" id="archive-list">
  {% for doc in docs limit: card_limit %}
  {% if doc.drive %}{% assign url = "https://drive.google.com/file/d/" | append: doc.drive | append: "/view" %}{% elsif doc.link %}{% assign url = doc.link %}{% else %}{% assign url = doc.url %}{% endif %}
  {% comment %}
    What the card itself answers for. The full text of transcribed articles
    and stories is not inlined here; the search script fetches it from
    search/gnarmpfsk-pages.json once someone actually types a query, keyed
    off `data-page` below.
  {% endcomment %}
  {% capture haystack %}{{ doc.title }} {{ doc.author }} {{ doc.source }} {{ doc.summary }} {{ doc.note }} {{ doc.date_display }} {{ doc.type }}{% endcapture %}
  <div class="archive-doc col-xs-12 col-md-6" data-date="{{ doc.date }}" data-type="{{ doc.type }}" data-title="{{ doc.title | escape }}"
       {% if doc.drive %}data-drive="{{ doc.drive }}" {% elsif doc.url %}data-page="{{ doc.url }}" {% endif %}data-search="{{ haystack | strip_newlines | downcase | escape }}">
    <h4><a href="{{ url }}"{% if doc.link or doc.drive %} target="_blank" rel="noopener"{% endif %}>{{ doc.title }}</a></h4>
    <div class="archive-meta">
      {% if doc.date %}Published {% endif %}{% if doc.date_display %}{{ doc.date_display }}{% else %}{{ doc.date | date: "%b. %-d, %Y" }}{% endif %}
      {% if doc.type %}<span class="label label-primary">{{ doc.type }}</span>{% endif %}
    </div>
    {% comment %}Filled in by the search script when the query is found in the scanned text.{% endcomment %}
    <div class="archive-hits" hidden></div>
    {% if doc.drive %}
    <div class="embed-responsive archive-embed" style="padding-bottom: 129%" data-drive="{{ doc.drive }}" data-title="{{ doc.title | escape }}">
      <span class="archive-embed-idle">{{ doc.title | escape }}</span>
    </div>
    <a href="{{ url }}" target="_blank" rel="noopener">Open full size</a>
    {% elsif doc.link %}
    {% if doc.image %}
    <a class="archive-article" href="{{ url }}" target="_blank" rel="noopener">
      <img src="{{ doc.image }}" alt="" loading="lazy">
    </a>
    {% endif %}
    <p class="archive-excerpt">{% if doc.source %}<em>{{ doc.source }}{% if doc.author %}, by {{ doc.author }}{% endif %}.</em> {% endif %}{{ doc.summary }}</p>
    <a href="{{ url }}" target="_blank" rel="noopener">Read the full article on {{ doc.source | default: "the web" }} &rarr;</a>
    {% if doc.note %}<p class="archive-note text-muted"><small>{{ doc.note }}</small></p>{% endif %}
    {% elsif doc.thumbnails %}
    <a class="archive-thumbs" href="{{ url }}">
      {% for thumb in doc.thumbnails %}<img src="{{ thumb }}" alt="" loading="lazy">{% endfor %}
    </a>
    <a href="{{ url }}">View all photos &rarr;</a>
    {% else %}
    {% comment %}
      The card's picture: a transcription's clipping of the original, or a
      story's own first photograph. `image` in the front matter overrides both,
      for a story whose opening photo is not the one worth showing.
    {% endcomment %}
    {% assign card_image = doc.clipping %}
    {% if doc.image %}{% assign card_image = doc.image %}{% endif %}
    {% unless card_image %}
      {% assign after_img = doc.content | split: '<img ' %}
      {% if after_img.size > 1 %}
        {% assign after_src = after_img[1] | split: 'src="' %}
        {% if after_src.size > 1 %}{% assign card_image = after_src[1] | split: '"' | first %}{% endif %}
      {% endif %}
    {% endunless %}
    {% if card_image %}
    <a class="archive-article" href="{{ url }}">
      <img src="{{ card_image }}" alt="" loading="lazy">
    </a>
    {% endif %}
    <p class="archive-excerpt">{% if doc.source %}<em>{{ doc.source }}{% if doc.author %}, by {{ doc.author }}{% endif %}.</em> {% elsif doc.author %}<em>By {{ doc.author }}.</em> {% endif %}{{ doc.content | markdownify | strip_html | truncatewords: 70 }}</p>
    {% if doc.source %}
    <a href="{{ url }}">Read local transcription &rarr;</a>
    {% else %}
    <a href="{{ url }}">Read the full story &rarr;</a>
    {% endif %}
    {% endif %}
  </div>
  {% endfor %}
</div>

{% comment %}
  Entering the viewport triggers the next batch of cards to materialize --
  see the sentinel observer in the script below. One pixel is enough to
  intersect; keeping it in flow (rather than `hidden`) is what lets the
  observer fire at all.
{% endcomment %}
<div id="archive-sentinel" aria-hidden="true" style="height: 1px"></div>

<p id="archive-empty" class="text-muted" style="display: none">No documents match these filters.</p>

{% comment %}
  Albums from the old photo gallery on S3, filled in by the script below from
  search/gallery-index.json when "Search in" is set to Both or Photo gallery.
{% endcomment %}
<div id="gallery-results" class="gallery-results" hidden>
  <h3>From the photo gallery</h3>
  <p id="gallery-count" class="text-muted archive-search-status"></p>
  <div class="archive-list" id="gallery-list"></div>
  <button type="button" class="btn btn-default" id="gallery-more" hidden>Show more albums</button>
</div>

<script>
(function () {
  var list = document.getElementById('archive-list');
  var sentinel = document.getElementById('archive-sentinel');
  var dataScript = document.getElementById('archive-data');
  var cards = dataScript ? JSON.parse(dataScript.textContent) : [];
  var buttons = document.querySelectorAll('#archive-types .btn');
  var yearFrom = document.getElementById('archive-year-from');
  var yearTo = document.getElementById('archive-year-to');
  var minYear = +yearFrom.min, maxYear = +yearFrom.max;
  var sortSelect = document.getElementById('archive-sort');
  var search = document.getElementById('archive-search');
  var note = document.getElementById('archive-search-note');
  // A document has exactly one type, and only one can be chosen at a time.
  // Empty means no filter.
  var selected = '';

  // The first `card_limit` cards are rendered as HTML by Liquid and the rest
  // live only in `cards` until the sentinel scrolls into view. The DOM then
  // grows monotonically: once a card is materialized it stays in the tree and
  // is just toggled with `display:none`, so its Drive iframe does not have to
  // be torn down and remounted on every filter change.
  var BATCH_SIZE = 16;
  var visibleCount = BATCH_SIZE;
  var renderedByIdx = {};
  // Hydrate from the HTML Liquid drew. The HTML order matches `cards` because
  // both loops run over the same `docs` list on the server.
  Array.prototype.forEach.call(list.children, function (el, i) {
    el.setAttribute('data-idx', i);
    renderedByIdx[i] = el;
  });

  // Two text indexes, fetched on first search and merged into one map:
  //   - search/gnarmpfsk-index.json: one entry per Google Drive file, holding
  //     the OCR'd text of each page (so hits can name a page number). ~1 MB.
  //   - search/gnarmpfsk-pages.json: one entry per transcribed article or
  //     story URL, holding the whole body as a single blob. ~50 KB, written
  //     by the gnarmpfsk_pages_index plugin at build time so the archive
  //     page's HTML stays small.
  // Both share the same shape here: a per-key array of page strings, with
  // transcribed pages treated as a one-page document. If either file never
  // arrives, the card filters still work on their own.
  var index = null, lowered = null, indexState = 'idle';

  // Drive's preview is a whole application per document, not an image. Several
  // hundred of them on one page is enough for Google to start refusing the
  // requests, and the cards that lose the race show an error box instead of a
  // scan. So keep only the ones near the viewport alive.
  var LIVE_MAX = 12;
  var live = [];
  var scrolling = 0;

  function mount(box) {
    if (box.querySelector('iframe')) return;
    var frame = document.createElement('iframe');
    frame.className = 'embed-responsive-item';
    frame.src = 'https://drive.google.com/file/d/' + box.getAttribute('data-drive') + '/preview';
    frame.title = box.getAttribute('data-title') || '';
    frame.setAttribute('allow', 'autoplay');
    box.appendChild(frame);
    live.push(box);
    if (live.length > LIVE_MAX) evict();
  }

  function unmount(box) {
    var frame = box.querySelector('iframe');
    if (frame) box.removeChild(frame);
    var i = live.indexOf(box);
    if (i >= 0) live.splice(i, 1);
  }

  // Drop whichever live viewer is furthest from the middle of the screen, so
  // scrolling back a little does not throw away what was just read.
  function evict() {
    var middle = window.scrollY + window.innerHeight / 2;
    var worst = 0, worstDist = -1;
    for (var i = 0; i < live.length; i++) {
      var r = live[i].getBoundingClientRect();
      // A card hidden by a filter has no box at all. Measuring from its empty
      // rectangle would place it at the top of the document, which can read as
      // nearer than a document actually on screen -- so retire it first.
      var d = (!r.height && !r.width) ? Infinity
            : Math.abs((r.top + window.scrollY + r.height / 2) - middle);
      if (d > worstDist) { worstDist = d; worst = i; }
    }
    unmount(live[worst]);
  }

  function nearViewport(box) {
    var r = box.getBoundingClientRect();
    if (!r.height && !r.width) return false;          // a filtered-out card
    return r.bottom > -600 && r.top < window.innerHeight + 600;
  }

  // The observer only calls back when a box's intersection *changes*, and
  // filtering the list moves cards into view by reordering their neighbours
  // rather than by scrolling. So after every filter, search or sort, look for
  // what is on screen instead of waiting to be told.
  function sweep() {
    var boxes = document.querySelectorAll('.archive-embed');
    var added = 0;
    for (var i = 0; i < boxes.length && added < LIVE_MAX; i++) {
      if (boxes[i].querySelector('iframe') || !nearViewport(boxes[i])) continue;
      mount(boxes[i]);
      added++;
    }
  }

  var io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) mount(e.target); });
    }, { rootMargin: '600px 0px' });
    Array.prototype.forEach.call(document.querySelectorAll('.archive-embed'), function (b) {
      io.observe(b);
    });
  } else {
    // No observer: sweep on scroll instead, which costs a little more but
    // keeps the behaviour identical.
    window.addEventListener('scroll', function () {
      if (scrolling) return;
      scrolling = requestAnimationFrame(function () { scrolling = 0; sweep(); });
    });
  }

  // The sentinel is the one-pixel row that sits just after the archive-list.
  // When it drifts into view we grow the window of visible cards by a batch
  // and re-run update(), which calls createCard() for any new ones.
  if ('IntersectionObserver' in window && sentinel) {
    var sentinelObs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        visibleCount += BATCH_SIZE;
        update();
      }
    }, { rootMargin: '400px 0px' });
    sentinelObs.observe(sentinel);
  }

  function loadIndex() {
    indexState = 'loading';
    function get(url) {
      return fetch(url).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        return r.json();
      });
    }
    Promise.all([get('/search/gnarmpfsk-index.json'), get('/search/gnarmpfsk-pages.json')])
      .then(function (results) {
        index = {};
        // A lowercase copy to search, so the stored text keeps its capitals
        // for display in the snippets.
        lowered = {};
        var ocr = results[0].docs;
        Object.keys(ocr).forEach(function (id) {
          index[id] = ocr[id];
          lowered[id] = ocr[id].map(function (p) { return p.toLowerCase(); });
        });
        // Transcribed pages are a single blob; wrap each as a one-page
        // document so findHits treats them the same way.
        var pageText = results[1].pages;
        Object.keys(pageText).forEach(function (url) {
          index[url] = [pageText[url]];
          lowered[url] = [pageText[url].toLowerCase()];
        });
        indexState = 'ready';
        update();
      })
      .catch(function () { indexState = 'failed'; update(); });
  }

  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function escapeHtml(s) {
    return (s == null ? '' : String(s))
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function escapeAttr(s) { return escapeHtml(s).replace(/"/g, '&quot;'); }

  // Dates in the data array are ISO ("1942-05-15"). The HTML Liquid produced
  // for the first batch uses `%b. %-d, %Y` ("May. 15, 1942"), so match that
  // for cards built on the client -- or the two look like different pages.
  var MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.',
                'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
  function formatDate(iso) {
    if (!iso) return '';
    var p = iso.split('-');
    if (p.length !== 3) return iso;
    var m = +p[1] - 1;
    if (m < 0 || m > 11) return iso;
    return MONTHS[m] + ' ' + +p[2] + ', ' + p[0];
  }

  // -> {pages: [1-based page numbers], text: page containing the first hit}
  function findHitsForId(id, query) {
    if (!id || !lowered || !lowered[id]) return null;
    var pages = [], text = null;
    for (var i = 0; i < lowered[id].length; i++) {
      if (lowered[id][i].indexOf(query) >= 0) {
        pages.push(i + 1);
        if (text === null) text = index[id][i];
      }
    }
    return pages.length ? { pages: pages, text: text, total: lowered[id].length } : null;
  }

  // The markup here has to stay in step with the Liquid loop a few hundred
  // lines up that renders the first batch of cards. When a card is built
  // on the client, filtering, iframe mounting and the hit snippets all
  // have to find the same DOM shape as a Liquid-rendered one.
  function createCard(d, idx) {
    var el = document.createElement('div');
    el.className = 'archive-doc col-xs-12 col-md-6';
    el.setAttribute('data-date', d.date || '');
    el.setAttribute('data-type', d.type || '');
    el.setAttribute('data-title', d.title || '');
    if (d.drive) el.setAttribute('data-drive', d.drive);
    if (d.page) el.setAttribute('data-page', d.page);
    el.setAttribute('data-search', d.search || '');
    el.setAttribute('data-idx', idx);

    var external = !!(d.drive || d.link);
    var html = '<h4><a href="' + escapeAttr(d.url) + '"' +
               (external ? ' target="_blank" rel="noopener"' : '') + '>' +
               escapeHtml(d.title) + '</a></h4>';
    html += '<div class="archive-meta">';
    if (d.date) html += 'Published ';
    html += escapeHtml(d.display || formatDate(d.date));
    if (d.type) html += ' <span class="label label-primary">' + escapeHtml(d.type) + '</span>';
    html += '</div>';
    html += '<div class="archive-hits" hidden></div>';

    if (d.drive) {
      html += '<div class="embed-responsive archive-embed" style="padding-bottom: 129%" data-drive="' +
              escapeAttr(d.drive) + '" data-title="' + escapeAttr(d.title) + '">' +
              '<span class="archive-embed-idle">' + escapeHtml(d.title) + '</span></div>' +
              '<a href="' + escapeAttr(d.url) + '" target="_blank" rel="noopener">Open full size</a>';
    } else if (d.link) {
      if (d.image) {
        html += '<a class="archive-article" href="' + escapeAttr(d.url) + '" target="_blank" rel="noopener">' +
                '<img src="' + escapeAttr(d.image) + '" alt="" loading="lazy"></a>';
      }
      html += '<p class="archive-excerpt">';
      if (d.source) {
        html += '<em>' + escapeHtml(d.source) +
                (d.author ? ', by ' + escapeHtml(d.author) : '') + '.</em> ';
      }
      html += escapeHtml(d.summary || '') + '</p>';
      html += '<a href="' + escapeAttr(d.url) + '" target="_blank" rel="noopener">' +
              'Read the full article on ' + escapeHtml(d.source || 'the web') + ' &rarr;</a>';
      if (d.note) html += '<p class="archive-note text-muted"><small>' + escapeHtml(d.note) + '</small></p>';
    } else if (d.thumbs) {
      html += '<a class="archive-thumbs" href="' + escapeAttr(d.url) + '">';
      d.thumbs.forEach(function (t) { html += '<img src="' + escapeAttr(t) + '" alt="" loading="lazy">'; });
      html += '</a><a href="' + escapeAttr(d.url) + '">View all photos &rarr;</a>';
    } else {
      if (d.image) {
        html += '<a class="archive-article" href="' + escapeAttr(d.url) + '">' +
                '<img src="' + escapeAttr(d.image) + '" alt="" loading="lazy"></a>';
      }
      html += '<p class="archive-excerpt">';
      if (d.source) {
        html += '<em>' + escapeHtml(d.source) +
                (d.author ? ', by ' + escapeHtml(d.author) : '') + '.</em> ';
      } else if (d.author) {
        html += '<em>By ' + escapeHtml(d.author) + '.</em> ';
      }
      html += escapeHtml(d.excerpt || '') + '</p>';
      html += '<a href="' + escapeAttr(d.url) + '">' +
              (d.source ? 'Read local transcription &rarr;' : 'Read the full story &rarr;') + '</a>';
    }

    el.innerHTML = html;
    if (io && d.drive) {
      var embed = el.querySelector('.archive-embed');
      if (embed) io.observe(embed);
    }
    return el;
  }

  function listPages(pages) {
    if (pages.length === 1) return 'page ' + pages[0];
    // A common word can hit every page of a long issue; do not list them all.
    if (pages.length > 6) return 'pages ' + pages.slice(0, 6).join(', ') + ' and ' + (pages.length - 6) + ' more';
    return 'pages ' + pages.slice(0, -1).join(', ') + ' and ' + pages[pages.length - 1];
  }

  // A window of about 90 characters either side of the match, trimmed back to
  // whole words.
  function snippet(text, query) {
    var at = text.toLowerCase().indexOf(query);
    var start = Math.max(0, at - 90), end = Math.min(text.length, at + query.length + 90);
    var s = text.slice(start, end);
    if (start > 0) s = '…' + s.replace(/^\S*\s/, '');
    if (end < text.length) s = s.replace(/\s\S*$/, '') + '…';
    return escapeHtml(s).replace(new RegExp('(' + escapeRe(query) + ')', 'gi'), '<mark>$1</mark>');
  }

  function renderHits(el, hits, query) {
    var box = el.querySelector('.archive-hits');
    if (!box) return;
    if (!hits) { box.hidden = true; box.innerHTML = ''; return; }
    var where = hits.total > 1 ? 'Found on ' + listPages(hits.pages) : 'Found in the text';
    box.innerHTML = '<p class="archive-hit-where">' + where + '</p><p>' +
      snippet(hits.text, query) + '</p>';
    box.hidden = false;
  }

  // The old photo gallery (mitoc-gallery on S3) is searched only when "Search
  // in" asks for it. Its albums live in search/gallery-index.json -- title, place in
  // the album tree, description and photo captions -- which is several
  // megabytes, so it too is fetched only on first use. The gallery itself has
  // no thumbnails, only full-size photos, so its results are text cards that
  // link out to the album and photo pages.
  var scopeButtons = document.querySelectorAll('#archive-scope .btn');
  var advancedToggle = document.getElementById('archive-advanced-toggle');
  var advancedPanel = document.getElementById('archive-advanced');
  var advancedCount = document.getElementById('archive-advanced-count');
  advancedToggle.addEventListener('click', function () {
    var open = advancedPanel.hidden;
    advancedPanel.hidden = !open;
    advancedToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    advancedToggle.classList.toggle('active', open);
  });
  var galleryBox = document.getElementById('gallery-results');
  var galleryList = document.getElementById('gallery-list');
  var galleryCount = document.getElementById('gallery-count');
  var galleryMore = document.getElementById('gallery-more');
  var GALLERY_PAGE = 20;
  var gallery = null, galleryState = 'idle', galleryShown = GALLERY_PAGE, galleryKey = '';

  // 'archive' (the documents on this page), 'both', or 'gallery'.
  var scope = 'archive';
  try {
    var savedScope = localStorage.getItem('gnarmpfsk-scope');
    if (savedScope === 'both' || savedScope === 'gallery') scope = savedScope;
  } catch (e) {}

  function setScope(s) {
    scope = s;
    Array.prototype.forEach.call(scopeButtons, function (b) {
      var on = b.getAttribute('data-scope') === scope;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    // Gallery albums have no type, so the type buttons mean nothing on their own.
    Array.prototype.forEach.call(buttons, function (b) { b.disabled = scope === 'gallery'; });
  }
  setScope(scope);

  function loadGallery() {
    galleryState = 'loading';
    fetch('/search/gallery-index.json')
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (json) {
        gallery = json;
        json.albums.forEach(function (a) {
          // What the album's own words match on, and what its captions match on,
          // are kept apart so a card can say where the search was found.
          a.own = [a.t, a.p, a.d].join(' ').toLowerCase();
          a.caps = (a.x || []).map(function (c) { return c[1].toLowerCase(); });
        });
        galleryState = 'ready';
        update();
      })
      .catch(function () { galleryState = 'failed'; update(); });
  }

  function galleryUrl(id) { return /^\d+$/.test(id) ? gallery.base + id + '.html' : '#'; }

  function galleryCard(a, query) {
    var card = '<div class="archive-doc col-xs-12 col-md-6">' +
      '<h4><a href="' + escapeAttr(galleryUrl(a.i)) + '" target="_blank" rel="noopener">' + escapeHtml(a.t) + '</a></h4>' +
      '<div class="archive-meta">' + (a.y ? escapeHtml(a.y) : 'Undated') +
      ' <span class="label label-default">Photo gallery</span>' +
      (a.p ? '<small class="gallery-path">in ' + escapeHtml(a.p) + '</small>' : '') + '</div>';
    var hits = [];
    if (a.d && a.d.toLowerCase().indexOf(query) >= 0) {
      hits.push('<p>' + snippet(a.d, query) + '</p>');
    }
    var capHits = [];
    for (var i = 0; i < a.caps.length; i++) {
      if (a.caps[i].indexOf(query) >= 0) capHits.push(i);
    }
    capHits.slice(0, 3).forEach(function (i) {
      hits.push('<p><a href="' + escapeAttr(galleryUrl(a.x[i][0])) + '" target="_blank" rel="noopener">' +
        snippet(a.x[i][1], query) + '</a></p>');
    });
    if (capHits.length) {
      hits.unshift('<p class="archive-hit-where">' + (capHits.length === 1 ? 'Found in a photo caption'
        : 'Found in ' + capHits.length + ' photo captions') + '</p>');
    }
    if (hits.length) card += '<div class="archive-hits">' + hits.join('') + '</div>';
    if (a.d && !hits.length) card += '<p class="archive-excerpt">' + escapeHtml(a.d.length > 300 ? a.d.slice(0, 300).replace(/\s\S*$/, '') + '…' : a.d) + '</p>';
    card += '<a href="' + escapeAttr(galleryUrl(a.i)) + '" target="_blank" rel="noopener">' +
      (a.n ? 'View all ' + a.n + (a.n === 1 ? ' photo' : ' photos') : 'Open the album') + ' &rarr;</a></div>';
    return card;
  }

  function matchesQuery(a, query) {
    if (!query || a.own.indexOf(query) >= 0) return true;
    for (var i = 0; i < a.caps.length; i++) { if (a.caps[i].indexOf(query) >= 0) return true; }
    return false;
  }

  // Lists the albums for the current search and returns how many match in
  // each year (ignoring the year range), for the histogram -- or null when
  // the gallery is not being searched or has not arrived yet.
  function updateGallery(query, from, to, sort) {
    var only = scope === 'gallery';
    galleryBox.hidden = scope === 'archive';
    galleryBox.classList.toggle('gallery-only', only);
    galleryList.innerHTML = '';
    galleryMore.hidden = true;
    if (scope === 'archive') return null;
    // Alongside the documents, the gallery waits for a search rather than
    // piling all its albums underneath. On its own, an empty search browses it.
    if (!query && !only) { galleryCount.textContent = 'Type a search above to look through the photo gallery too.'; return null; }
    if (selected && !only) { galleryCount.textContent = 'Gallery albums are listed only when Type is set to All.'; return null; }
    if (galleryState === 'idle') loadGallery();
    if (galleryState === 'loading') { galleryCount.textContent = 'Loading the photo gallery…'; return null; }
    if (galleryState === 'failed') { galleryCount.textContent = 'The photo gallery could not be searched just now.'; return null; }
    var whole = from === minYear && to === maxYear;
    var counts = {};
    var found = gallery.albums.filter(function (a) {
      if (!matchesQuery(a, query)) return false;
      if (a.y) counts[a.y] = (counts[a.y] || 0) + 1;
      return a.y ? +a.y >= from && +a.y <= to : whole;
    });
    // Same order as the documents above: by year, then by when the album was made.
    found.sort(function (a, b) {
      var ka = (a.y || '') + (a.c || ''), kb = (b.y || '') + (b.c || '');
      if (!a.y || !b.y) return !a.y - !b.y;
      return sort === 'date-asc' ? ka.localeCompare(kb) : kb.localeCompare(ka);
    });
    // A new search starts again from the first page of albums.
    var key = [query, from, to, sort].join('|');
    if (key !== galleryKey) { galleryKey = key; galleryShown = GALLERY_PAGE; }
    galleryList.innerHTML = found.slice(0, galleryShown).map(function (a) { return galleryCard(a, query); }).join('');
    galleryMore.hidden = found.length <= galleryShown;
    var more = found.length > galleryShown ? ', showing the first ' + galleryShown + '.' : '.';
    galleryCount.textContent = !found.length ? 'No gallery albums match.'
      : !query ? found.length + ' albums' + more
      : found.length === 1 ? '1 gallery album matches.'
      : found.length + ' gallery albums match' + more;
    return counts;
  }

  // Undated documents (empty `date`) always sort last.
  function byDateDesc(a, b) {
    var da = cards[a].date, db = cards[b].date;
    if (!da || !db) return !da - !db;
    return db.localeCompare(da);
  }

  // One bar per year, built once. Heights are set by update(), so the shape
  // follows whatever the type buttons and the search box are showing.
  var histBars = (function () {
    var box = document.getElementById('archive-year-hist');
    var bars = {};
    if (!box) return bars;
    for (var y = minYear; y <= maxYear; y++) {
      var bar = document.createElement('span');
      bar.style.height = '0';
      box.appendChild(bar);
      bars[y] = bar;
    }
    return bars;
  }());

  function drawHist(counts, from, to, noun) {
    noun = noun || 'document';
    var most = 0;
    for (var y in counts) { if (counts[y] > most) most = counts[y]; }
    for (var year = minYear; year <= maxYear; year++) {
      var bar = histBars[year];
      if (!bar) continue;
      var n = counts[year] || 0;
      bar.style.height = most ? Math.round(n / most * 100) + '%' : '0';
      bar.classList.toggle('in-range', year >= from && year <= to);
      bar.title = year + ': ' + n + ' ' + noun + (n === 1 ? '' : 's');
    }
  }

  function update() {
    var query = search.value.trim().toLowerCase();
    var from = +yearFrom.value, to = +yearTo.value;
    var span = maxYear - minYear || 1;
    var fill = document.getElementById('archive-years-fill');
    fill.style.left = (from - minYear) / span * 100 + '%';
    fill.style.right = (maxYear - to) / span * 100 + '%';
    document.getElementById('archive-years-value').textContent = from === to ? from : from + '–' + to;
    var sort = sortSelect.value;
    // With the advanced options folded away, the button says how many of them
    // are doing something, so a remembered "Photo gallery" or a narrowed year
    // range never quietly hides documents.
    var changed = (scope !== 'archive') + !!selected + (from !== minYear || to !== maxYear) + (sort !== 'date-desc');
    advancedCount.textContent = changed;
    advancedCount.hidden = !changed;
    advancedCount.title = changed === 1 ? '1 option changed' : changed + ' options changed';
    // Searching the gallery alone: the documents step aside, giving back their
    // viewers, and the histogram counts albums instead.
    var galleryOnly = scope === 'gallery';
    list.style.display = galleryOnly ? 'none' : '';
    if (sentinel) sentinel.style.display = galleryOnly ? 'none' : '';
    document.getElementById('archive-count').hidden = galleryOnly;
    if (galleryOnly) {
      live.slice().forEach(unmount);
      document.getElementById('archive-empty').style.display = 'none';
      note.hidden = true;
      drawHist(updateGallery(query, from, to, sort) || {}, from, to, 'album');
      return;
    }

    // Walk indices into `cards` in the chosen sort order. The sort is over
    // the whole archive, not just what has been rendered, so the first batch
    // always maps to the first N of the sorted set.
    var order = cards.map(function (_, i) { return i; }).sort(function (a, b) {
      if (sort === 'date-asc') {
        if (!cards[a].date || !cards[b].date) return byDateDesc(a, b);
        return -byDateDesc(a, b);
      }
      if (sort === 'type') {
        var cmp = (cards[a].type || '').localeCompare(cards[b].type || '');
        if (cmp) return cmp;
      }
      return byDateDesc(a, b);
    });
    if (query && indexState === 'idle') loadIndex();

    // Decide which cards match the current filter + search. The bars answer
    // "which years would this search find", so they count what matches
    // everything except the year range itself.
    var matches = [], counts = {};
    order.forEach(function (idx) {
      var c = cards[idx];
      var year = c.date ? c.date.slice(0, 4) : '';
      var inRange = year ? +year >= from && +year <= to : from === minYear && to === maxYear;
      var typeOk = !selected || c.type === selected;
      var onCard = !query || (c.search || '').indexOf(query) >= 0;
      var id = c.drive || c.page;
      var hits = query && id ? findHitsForId(id, query) : null;
      var textOk = onCard || !!hits;
      if (year && typeOk && textOk) counts[year] = (counts[year] || 0) + 1;
      if (typeOk && inRange && textOk) matches.push({ idx: idx, hits: hits });
    });

    // Render only the first `visibleCount` matches; the rest wait for the
    // sentinel to pull them in. Reorder with CSS `order` so already-mounted
    // iframes stay where they are.
    var toShow = matches.slice(0, visibleCount);
    toShow.forEach(function (m, pos) {
      var el = renderedByIdx[m.idx];
      if (!el) {
        el = createCard(cards[m.idx], m.idx);
        renderedByIdx[m.idx] = el;
        list.appendChild(el);
      }
      el.style.display = '';
      el.style.order = pos;
      // The snippet is worth showing even when the title already matched, so
      // long as the document is actually on screen.
      renderHits(el, m.hits, query);
    });
    // Hide every rendered card not in the current window, and give its iframe
    // back so active slots can go to visible cards.
    var shownIdx = {};
    toShow.forEach(function (m) { shownIdx[m.idx] = true; });
    Object.keys(renderedByIdx).forEach(function (idx) {
      if (shownIdx[idx]) return;
      var el = renderedByIdx[idx];
      el.style.display = 'none';
      var hiddenBox = el.querySelector('.archive-embed');
      if (hiddenBox) unmount(hiddenBox);
    });

    drawHist(counts, from, to);
    sweep();
    // Showing a snippet changes a card's height, which moves everything below
    // it; look again once that has settled.
    requestAnimationFrame(sweep);
    var countEl = document.getElementById('archive-count');
    if (matches.length === cards.length) {
      countEl.textContent = cards.length + ' documents';
    } else {
      countEl.textContent = 'Showing ' + matches.length + ' of ' + cards.length + ' documents';
    }
    document.getElementById('archive-empty').style.display = matches.length ? 'none' : '';
    // Fold the sentinel away when there is nothing left for it to reveal, so
    // the observer stops firing until a filter widens the match set again.
    if (sentinel) sentinel.style.display = toShow.length < matches.length ? '' : 'none';

    var message = '';
    if (query && indexState === 'loading') message = 'Searching the scanned pages…';
    else if (query && indexState === 'failed') message = 'The scanned pages could not be searched just now — showing title matches only.';
    note.textContent = message;
    note.hidden = !message;
    updateGallery(query, from, to, sort);
  }

  Array.prototype.forEach.call(buttons, function (btn) {
    btn.addEventListener('click', function () {
      var k = btn.getAttribute('data-type');
      // One type at a time: picking one replaces whatever was chosen, and
      // picking the one already chosen goes back to "All".
      selected = (!k || k === selected) ? '' : k;
      Array.prototype.forEach.call(buttons, function (b) {
        var bk = b.getAttribute('data-type');
        var on = bk ? bk === selected : !selected;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      update();
    });
  });
  // Keep the handles from crossing; the one being dragged stops at the other.
  yearFrom.addEventListener('input', function () {
    if (+yearFrom.value > +yearTo.value) yearFrom.value = yearTo.value;
    update();
  });
  yearTo.addEventListener('input', function () {
    if (+yearTo.value < +yearFrom.value) yearTo.value = yearFrom.value;
    update();
  });
  // When both handles sit at the same end, keep the one that can still move on top.
  yearFrom.addEventListener('pointerdown', function () { yearFrom.style.zIndex = 2; yearTo.style.zIndex = 1; });
  yearTo.addEventListener('pointerdown', function () { yearTo.style.zIndex = 2; yearFrom.style.zIndex = 1; });
  update();
  sortSelect.addEventListener('change', update);
  Array.prototype.forEach.call(scopeButtons, function (btn) {
    btn.addEventListener('click', function () {
      setScope(btn.getAttribute('data-scope'));
      try { localStorage.setItem('gnarmpfsk-scope', scope); } catch (e) {}
      update();
    });
  });
  galleryMore.addEventListener('click', function () {
    galleryShown += GALLERY_PAGE;
    update();
  });
  // Typing scans every OCR'd page, so wait for a pause rather than running on
  // each keystroke.
  var typing = null;
  search.addEventListener('input', function () {
    clearTimeout(typing);
    typing = setTimeout(update, 120);
  });
})();
</script>

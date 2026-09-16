---
    permalink: /about/gnarmfsk
    title: GNARMFSK
    # PDFs are listed in _data/gnarmfsk.yml and hosted in /docs/gnarmfsk/.
    # Pages under _pages/about/gnarmfsk/ with a `keywords` list (stories, photo galleries)
    # are listed too.
---

GNARMFSK---the sound made by a newly-awoken hiker in a wet sleeping bag on a frosty morning, as they realize that if they are to have any hot chocolate they are going to have to get up and make it themselves---is MITOC's newsletter, dating back to 1955!

Here, you can read (a selection of) old GNARMFSK newsletters, as well as more recent stories from current and former MITOC'ers!

For other cool stories, also check out the [Sean A. Collier Adventure Grant](https://mitoc-cag.mit.edu/) or the [trip report archive (1946-2017)](/legacy-gallery/)!


<style>
  .archive-controls { margin: 20px 0; }
  .archive-controls .form-group { margin-right: 20px; margin-bottom: 10px; vertical-align: top; }
  .archive-keywords .btn { margin: 0 4px 4px 0; }
  .archive-list { display: flex; flex-wrap: wrap; margin: 0 -15px; }
  .archive-doc { margin-bottom: 30px; }
  .archive-doc h4 { margin-bottom: 4px; }
  .archive-doc h4 a { color: inherit; }
  .archive-meta { margin-bottom: 8px; color: #777; }
  .archive-meta .label { margin-left: 4px; }
  .archive-thumbs { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 8px; }
  .archive-thumbs img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; background: #eee; }
  .archive-excerpt { font-size: 16px; line-height: 1.6; }
  /* Two-handle year slider: two range inputs stacked on one track. */
  .year-range { position: relative; width: 260px; max-width: 100%; height: 34px; }
  .year-range-track { position: absolute; left: 0; right: 0; top: 15px; height: 4px; border-radius: 2px; background: #ddd; }
  .year-range-fill { position: absolute; top: 0; bottom: 0; background: #337ab7; border-radius: 2px; }
  .year-range input[type=range] { position: absolute; left: 0; top: 0; width: 100%; height: 34px; margin: 0; background: none; pointer-events: none; -webkit-appearance: none; appearance: none; }
  .year-range input[type=range]::-webkit-slider-runnable-track { background: none; }
  .year-range input[type=range]::-moz-range-track { background: none; }
  .year-range input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; pointer-events: auto; width: 20px; height: 20px; border-radius: 50%; background: #fff; border: 2px solid #337ab7; cursor: pointer; }
  .year-range input[type=range]::-moz-range-thumb { pointer-events: auto; width: 16px; height: 16px; border-radius: 50%; background: #fff; border: 2px solid #337ab7; cursor: pointer; }
  .year-range input[type=range]:focus-visible { outline: none; }
  .year-range input[type=range]:focus-visible::-webkit-slider-thumb { box-shadow: 0 0 0 3px rgba(51, 122, 183, 0.4); }
  .year-range input[type=range]:focus-visible::-moz-range-thumb { box-shadow: 0 0 0 3px rgba(51, 122, 183, 0.4); }
</style>

{% assign data = site.data.gnarmfsk %}
{% assign pages = site.pages | where_exp: "p", "p.url contains '/about/gnarmfsk/'" | where_exp: "p", "p.keywords" %}
{% assign docs = data.documents | concat: pages | sort: "date" | reverse %}

<form class="archive-controls form-inline" onsubmit="return false">
  <div class="form-group">
    <label>Keyword</label><br>
    <div class="archive-keywords" role="group" id="archive-keywords">
      <button type="button" class="btn btn-default active" data-keyword="" aria-pressed="true">All</button>
      {% for keyword in data.keywords %}
      <button type="button" class="btn btn-default" data-keyword="{{ keyword }}" aria-pressed="false">{{ keyword }}</button>
      {% endfor %}
    </div>
  </div>
  {% assign first_year = docs.last.date | slice: 0, 4 %}
  {% assign last_year = docs.first.date | slice: 0, 4 %}
  <div class="form-group">
    <label id="archive-years-label">Years: <span id="archive-years-value">{{ first_year }}–{{ last_year }}</span></label><br>
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
      <option value="keyword">Keyword (A–Z)</option>
    </select>
  </div>
</form>

<p id="archive-count" class="text-muted">{{ docs.size }} documents</p>

<div class="archive-list" id="archive-list">
  {% for doc in docs %}
  {% if doc.file %}{% assign url = "/docs/gnarmfsk/" | append: doc.file %}{% else %}{% assign url = doc.url %}{% endif %}
  <div class="archive-doc col-xs-12 col-md-6" data-date="{{ doc.date }}" data-keywords="{{ doc.keywords | join: '|' }}" data-title="{{ doc.title | escape }}">
    <h4><a href="{{ url }}">{{ doc.title }}</a></h4>
    <div class="archive-meta">
      Published {% if doc.date_display %}{{ doc.date_display }}{% else %}{{ doc.date | date: "%b. %-d, %Y" }}{% endif %}
      {% for keyword in doc.keywords %}<span class="label label-primary">{{ keyword }}</span>{% endfor %}
    </div>
    {% if doc.file %}
    <div class="embed-responsive" style="padding-bottom: 129%">
      <iframe class="embed-responsive-item" src="{{ url }}#view=FitH&navpanes=0" title="{{ doc.title | escape }}" loading="lazy"></iframe>
    </div>
    <a href="{{ url }}">Open full size</a>
    {% elsif doc.thumbnails %}
    <a class="archive-thumbs" href="{{ url }}">
      {% for thumb in doc.thumbnails %}<img src="{{ thumb }}" alt="" loading="lazy">{% endfor %}
    </a>
    <a href="{{ url }}">View all photos &rarr;</a>
    {% else %}
    <p class="archive-excerpt">{% if doc.author %}<em>By {{ doc.author }}.</em> {% endif %}{{ doc.content | markdownify | strip_html | truncatewords: 70 }}</p>
    <a href="{{ url }}">Read the full story &rarr;</a>
    {% endif %}
  </div>
  {% endfor %}
</div>

<p id="archive-empty" class="text-muted" style="display: none">No documents match these filters.</p>

<script>
(function () {
  var list = document.getElementById('archive-list');
  var docs = Array.prototype.slice.call(list.children);
  var buttons = document.querySelectorAll('#archive-keywords .btn');
  var yearFrom = document.getElementById('archive-year-from');
  var yearTo = document.getElementById('archive-year-to');
  var minYear = +yearFrom.min, maxYear = +yearFrom.max;
  var sortSelect = document.getElementById('archive-sort');
  var keyword = '';

  function keywordsOf(el) { return el.getAttribute('data-keywords').split('|'); }
  function byDateDesc(a, b) { return b.getAttribute('data-date').localeCompare(a.getAttribute('data-date')); }

  function update() {
    var from = +yearFrom.value, to = +yearTo.value;
    var span = maxYear - minYear || 1;
    var fill = document.getElementById('archive-years-fill');
    fill.style.left = (from - minYear) / span * 100 + '%';
    fill.style.right = (maxYear - to) / span * 100 + '%';
    document.getElementById('archive-years-value').textContent = from === to ? from : from + '–' + to;
    var sort = sortSelect.value;
    var sorted = docs.slice().sort(function (a, b) {
      if (sort === 'date-asc') return -byDateDesc(a, b);
      if (sort === 'keyword') {
        // Documents with the selected keyword sort by it; otherwise by their first keyword.
        var ka = keyword && keywordsOf(a).indexOf(keyword) >= 0 ? keyword : keywordsOf(a)[0];
        var kb = keyword && keywordsOf(b).indexOf(keyword) >= 0 ? keyword : keywordsOf(b)[0];
        return ka.localeCompare(kb) || byDateDesc(a, b);
      }
      return byDateDesc(a, b);
    });
    var shown = 0;
    // Reorder with CSS `order` rather than moving nodes, which would reload the iframes.
    sorted.forEach(function (el, i) {
      var match = (!keyword || keywordsOf(el).indexOf(keyword) >= 0) &&
        +el.getAttribute('data-date').slice(0, 4) >= from &&
        +el.getAttribute('data-date').slice(0, 4) <= to;
      el.style.display = match ? '' : 'none';
      el.style.order = i;
      if (match) shown++;
    });
    document.getElementById('archive-count').textContent =
      shown === docs.length ? docs.length + ' documents' : 'Showing ' + shown + ' of ' + docs.length + ' documents';
    document.getElementById('archive-empty').style.display = shown ? 'none' : '';
  }

  Array.prototype.forEach.call(buttons, function (btn) {
    btn.addEventListener('click', function () {
      keyword = btn.getAttribute('data-keyword');
      Array.prototype.forEach.call(buttons, function (b) {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
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
})();
</script>

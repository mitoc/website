---
    permalink: /about/gnarmpfsk/tech-archive
    title: MITOC in The Tech
    # Data lives in _data/tech_archive.yml. This page deliberately has no
    # `type`, so it is not listed as a card on /about/gnarmpfsk.
---

<p class="tech-lead">MIT's student newspaper has been covering the Outing Club since before the club existed. A full-text search of <a href="https://thetech.com/issues" target="_blank" rel="noopener">The Tech's archive</a> turns up <strong>{{ site.data.tech_archive.issues | size }} issues</strong> that mention the club, from {{ site.data.tech_archive.issues.first.year }} to {{ site.data.tech_archive.issues.last.year }}. Every one is listed below.</p>

<p><a href="/about/gnarmpfsk">&larr; Back to GNARMPFSK</a>, where the most interesting of these are transcribed in full.</p>

<div class="tech-notes">
  <p><strong>A few things to know.</strong> Most of these are one-line trip notices rather than articles &mdash; the club ran a hike or a dance, and The Tech printed the announcement. The snippets come from the archive's own OCR of the scanned paper, so they contain the occasional garbled word. Issues that mention only another school's outing club (mostly Harvard Outing Club dance advertisements) have been left out.</p>
  <p><strong>Longer pieces only</strong> hides the trip notices, calendar entries and passing mentions in lists, leaving the {{ site.data.tech_archive.issues | where: "longer", true | size }} issues where the club is actually written about. It is judged from the text, so it is approximate &mdash; everything we have transcribed is always kept.</p>
  <p>Dates are read from each issue's own masthead. A handful of scans have no legible masthead, and those rows show the volume's year instead &mdash; which, since The Tech's volumes run across the new year, can be a year before the issue itself.</p>
</div>

<form class="tech-controls form-inline" onsubmit="return false">
  <div class="form-group">
    <label for="tech-search">Search the text</label><br>
    <input type="search" id="tech-search" class="form-control" placeholder="cabin, Katahdin, hearse&hellip;" autocomplete="off">
  </div>
  {% assign years = site.data.tech_archive.issues | map: "year" | sort %}
  <div class="form-group">
    <label id="tech-years-label">Years: <span id="tech-years-value">{{ years.first }}–{{ years.last }}</span></label><br>
    <div class="year-hist" id="tech-year-hist" aria-hidden="true"></div>
    <div class="year-range">
      <div class="year-range-track"><div class="year-range-fill" id="tech-years-fill"></div></div>
      <input type="range" id="tech-year-from" min="{{ years.first }}" max="{{ years.last }}" step="1" value="{{ years.first }}" aria-label="From year">
      <input type="range" id="tech-year-to" min="{{ years.first }}" max="{{ years.last }}" step="1" value="{{ years.last }}" aria-label="To year">
    </div>
  </div>
  <div class="form-group">
    <label>&nbsp;</label><br>
    <button type="button" class="btn btn-default" id="tech-only-longer" aria-pressed="false">Longer pieces only</button>
    <button type="button" class="btn btn-default" id="tech-only-transcribed" aria-pressed="false">Transcribed on this site only</button>
  </div>
</form>

<p id="tech-count" class="text-muted">{{ site.data.tech_archive.issues | size }} issues</p>

<div class="table-responsive">
<table class="table table-striped tech-table" id="tech-table">
  <thead>
    <tr><th>Date</th><th>Issue</th><th>Page</th><th>Text</th></tr>
  </thead>
  <tbody>
    {% for i in site.data.tech_archive.issues %}
    {% comment %}The slider filters on the year shown in the Date column, not the
    volume's year: for a volume that runs across the new year the two differ, and
    a row landing outside a range that contains its own printed date reads as a bug.{% endcomment %}
    <tr data-year="{% if i.date %}{{ i.date | slice: 0, 4 }}{% else %}{{ i.year }}{% endif %}"
        data-transcribed="{% if i.story or i.link %}1{% endif %}"
        data-longer="{% if i.longer %}1{% endif %}"
        data-text="{{ i.snippet | escape | downcase }}">
      <td class="tech-date">{% if i.date %}{{ i.date | date: "%b %-d, %Y" }}{% else %}{{ i.year }}{% endif %}</td>
      <td class="tech-issue"><a href="https://archive.org/details/{{ i.id }}" target="_blank" rel="noopener">v{{ i.vol }}&nbsp;n{{ i.issue }}</a></td>
      <td class="tech-page">{% if i.pages.size > 0 %}{{ i.pages | join: ", " }}{% else %}&mdash;{% endif %}</td>
      <td>
        {% if i.story %}
        <a class="tech-story" href="/about/gnarmpfsk/articles/{{ i.story }}">Read local transcription &rarr;</a>
        {% elsif i.link %}
        <a class="tech-story" href="{{ i.link }}" target="_blank" rel="noopener">Read it on thetech.com &rarr;</a>
        {% endif %}
        <span class="tech-snippet">{{ i.snippet }}</span>
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>
</div>

<p id="tech-empty" class="text-muted" style="display: none">Nothing matches that search.</p>

<style>
  .tech-lead { font-size: 18px; }
  .tech-notes { background: #f6f6f6; border-left: 3px solid #ddd; padding: 12px 16px; margin: 20px 0; font-size: 15px; color: #555; }
  .tech-notes p:last-child { margin-bottom: 0; }
  .tech-controls { margin: 20px 0; }
  .tech-controls .form-group { margin-right: 20px; margin-bottom: 10px; vertical-align: top; }
  .tech-controls input[type=search] { min-width: 240px; }
  /* Two-handle year slider under a skyline of issues per year; the same
     control as the one on /about/gnarmpfsk. */
  .year-range { position: relative; width: 260px; max-width: 100%; height: 22px; }
  .year-range-track { position: absolute; left: 0; right: 0; top: 9px; height: 4px; border-radius: 2px; background: #ddd; }
  .year-range-fill { position: absolute; top: 0; bottom: 0; background: #337ab7; border-radius: 2px; }
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
  .tech-table { font-size: 15px; }
  .tech-table td, .tech-table th { vertical-align: top; }
  .tech-table .tech-date { white-space: nowrap; }
  .tech-table .tech-issue { white-space: nowrap; }
  .tech-table .tech-page { white-space: nowrap; color: #777; }
  .tech-snippet { color: #555; }
  .tech-story { display: block; margin-bottom: 4px; font-weight: bold; }
  mark { padding: 0; background: #fff3a3; }
  /* On a phone the page column goes and the rest is made to fit the screen, so
     the table wraps instead of scrolling sideways. Bootstrap's
     .table-responsive sets white-space: nowrap on every cell below 768px,
     which is what would otherwise force it wide, so that is overridden here. */
  @media (max-width: 600px) {
    .tech-table { font-size: 14px; table-layout: fixed; width: 100%; }
    .tech-table .tech-page,
    .tech-table thead th:nth-child(3) { display: none; }
    .tech-table thead th:nth-child(1) { width: 6em; }
    .tech-table thead th:nth-child(2) { width: 4.5em; }
    .table-responsive > .tech-table > thead > tr > th,
    .table-responsive > .tech-table > tbody > tr > td { white-space: normal; }
    .tech-table td:last-child { word-break: break-word; }
  }
</style>

<script>
(function () {
  var rows = Array.prototype.slice.call(document.querySelectorAll('#tech-table tbody tr'));
  var search = document.getElementById('tech-search');
  var yearFrom = document.getElementById('tech-year-from');
  var yearTo = document.getElementById('tech-year-to');
  var minYear = +yearFrom.min, maxYear = +yearFrom.max;
  var yearsFill = document.getElementById('tech-years-fill');
  var yearsValue = document.getElementById('tech-years-value');
  var onlyBtn = document.getElementById('tech-only-transcribed');
  var longerBtn = document.getElementById('tech-only-longer');
  var count = document.getElementById('tech-count');
  var empty = document.getElementById('tech-empty');
  var only = false, longerOnly = false;
  // Keep the original snippet text so repeated searches re-highlight cleanly.
  rows.forEach(function (r) {
    var s = r.querySelector('.tech-snippet');
    if (s) s.setAttribute('data-original', s.textContent);
  });

  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // One bar per year, built once. Heights are set by update(), so the skyline
  // follows whatever the search box and the two toggles are showing.
  var histBars = (function () {
    var box = document.getElementById('tech-year-hist');
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

  function drawHist(counts, from, to) {
    var most = 0;
    for (var y in counts) { if (counts[y] > most) most = counts[y]; }
    for (var year = minYear; year <= maxYear; year++) {
      var bar = histBars[year];
      if (!bar) continue;
      var n = counts[year] || 0;
      bar.style.height = most ? Math.round(n / most * 100) + '%' : '0';
      bar.classList.toggle('in-range', year >= from && year <= to);
      bar.title = n === 1 ? year + ': 1 issue' : year + ': ' + n + ' issues';
    }
  }

  function update() {
    var q = search.value.trim().toLowerCase();
    var from = +yearFrom.value, to = +yearTo.value;
    var span = maxYear - minYear || 1;
    yearsFill.style.left = (from - minYear) / span * 100 + '%';
    yearsFill.style.right = (maxYear - to) / span * 100 + '%';
    yearsValue.textContent = from === to ? from : from + '–' + to;
    var re = q ? new RegExp('(' + escapeRe(q) + ')', 'gi') : null;
    var shown = 0, counts = {};
    rows.forEach(function (r) {
      var year = +r.getAttribute('data-year');
      var others = (!q || r.getAttribute('data-text').indexOf(q) >= 0) &&
                   (!only || r.getAttribute('data-transcribed')) &&
                   (!longerOnly || r.getAttribute('data-longer'));
      var ok = others && year >= from && year <= to;
      // The bars answer "which years would this search find", so they count
      // what matches everything except the year range itself.
      if (others && year) counts[year] = (counts[year] || 0) + 1;
      r.style.display = ok ? '' : 'none';
      if (ok) shown++;
      var s = r.querySelector('.tech-snippet');
      if (s) {
        var text = s.getAttribute('data-original');
        if (ok && re) { s.innerHTML = escapeHtml(text).replace(re, '<mark>$1</mark>'); }
        else { s.textContent = text; }
      }
    });
    drawHist(counts, from, to);
    count.textContent = shown === rows.length ? rows.length + ' issues'
      : 'Showing ' + shown + ' of ' + rows.length + ' issues';
    empty.style.display = shown ? 'none' : '';
  }

  search.addEventListener('input', update);
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
  onlyBtn.addEventListener('click', function () {
    only = !only;
    onlyBtn.classList.toggle('active', only);
    onlyBtn.setAttribute('aria-pressed', only ? 'true' : 'false');
    update();
  });
  longerBtn.addEventListener('click', function () {
    longerOnly = !longerOnly;
    longerBtn.classList.toggle('active', longerOnly);
    longerBtn.setAttribute('aria-pressed', longerOnly ? 'true' : 'false');
    update();
  });
  update();
})();
</script>

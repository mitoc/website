---
    permalink: /about/gnarmfsk/construction
    title: Intervale III & Yurt Construction
    # Listed on /about/gnarmfsk. Photos live in /images/gnarmfsk/<folder>/ (full size)
    # and /images/gnarmfsk/<folder>/thumbs/, numbered 01.jpg, 02.jpg, ...
    date: "1993-09-01"
    date_display: c. 1993
    keywords: [Cabins]
    thumbnails:
      - /images/gnarmfsk/cabin/thumbs/01.jpg
      - /images/gnarmfsk/yurt/thumbs/01.jpg
      - /images/gnarmfsk/cabin/thumbs/17.jpg
      - /images/gnarmfsk/yurt/thumbs/04.jpg
    albums:
      - title: Intervale III construction
        folder: cabin
        count: 20
      - title: Yurt construction
        folder: yurt
        count: 16
---

<style>
  .construction-album { margin-bottom: 30px; }
  .construction-photos { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 8px; }
  .construction-photos img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; background: #eee; }
</style>

<p><a href="/about/gnarmfsk">&larr; Back to GNARMFSK</a></p>

Photos from the construction of Intervale III in the early 1990s. Click a photo to see it full size.

{% for album in page.albums %}
<div class="construction-album">
  <h3>{{ album.title }}</h3>
  <div class="construction-photos">
    {% for i in (1..album.count) %}
    {% capture n %}{% if i < 10 %}0{% endif %}{{ i }}{% endcapture %}
    <a href="/images/gnarmfsk/{{ album.folder }}/{{ n }}.jpg" data-lightbox="{{ album.folder }}"><img src="/images/gnarmfsk/{{ album.folder }}/thumbs/{{ n }}.jpg" alt="{{ album.title }}, photo {{ i }}" loading="lazy"></a>
    {% endfor %}
  </div>
</div>
{% endfor %}

{% include lightbox.html %}

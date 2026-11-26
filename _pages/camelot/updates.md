---
permalink: /camelot/updates
layout: bunkhouse
title: Updates
description: "News and photos from the Camelot bunkhouse project, newest first."
---

{% assign updates = site.camelot_updates | sort: 'date' | reverse %}
<ul class="camelot-update-list">
{% for update in updates %}
  <li>
    {% if update.image %}<a href="{{ update.url }}" class="camelot-update-thumb" tabindex="-1" aria-hidden="true"><img src="{{ update.image }}" alt="" loading="lazy"></a>{% endif %}
    <div>
      <p class="camelot-update-meta">{{ update.date | date: "%B %Y" }}</p>
      <h2><a href="{{ update.url }}">{{ update.title }}</a></h2>
      {% if update.summary %}<p>{{ update.summary }}</p>{% endif %}
    </div>
  </li>
{% endfor %}
</ul>

For the full project history, see the [timeline on the About page](/camelot/about#timeline).

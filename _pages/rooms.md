---
    permalink: /rooms
    title: Winter School 2021 - group discussions rooms
    rooms:
---

## Rooms will be published on Thursday

{% for room in page.rooms%}
- [**{{room.title}}** - {{room.link}}]({{room.link}})
{% endfor %}

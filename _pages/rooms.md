---
    permalink: /rooms
    title: Winter School 2021 - group discussions rooms
    rooms:
    - title: Mountaineering
      link: https://mit.zoom.us/j/97462191008
    - title: Backcountry skiing
      link: https://us05web.zoom.us/j/89677803779?pwd=b2llcVNCNy9ZR1I5ZkxkcGZMME90Zz09
    - title: Learning climbing/mountaineering safely and cheaply
      link: https://mit.zoom.us/j/92332333225
    - title: Risk management
      link: https://mit.zoom.us/j/98213622795
    - title: Winter running
      link: https://us04web.zoom.us/j/79762172032?pwd=NGlnWlRscXdrYkZSVXY4Z3R6L1p4dz09
---

## Rooms will be published on Thursday

{% for room in page.rooms%}
- [**{{room.title}}** - {{room.link}}]({{room.link}})
{% endfor %}

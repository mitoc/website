---
    permalink: /rooms
    title: Winter School 2021 - group discussions rooms
    rooms:
      - title: "Winter Hiking: How to Start"
        link: https://mit.zoom.us/j/94450959676
      - title: "Winter Hiking: Above Treelines"
        link:
      - title: Winter Camping
        link:
      - title: The Joy of Ice Climbing
        link:
      - title: Enjoying Winter
        link:
      - title: Human Metabolism! Layering and Heat Management in the Winter (and Summer!)
        link:
      - title: Women in the Outdoors (Open to all who identify as women or non-binary)
        link: https://mit.zoom.us/j/91023986078
---

{% for room in page.rooms%}
- [**{{room.title}}** - {{room.link}}]({{room.link}})
{% endfor %}

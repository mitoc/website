---
    permalink: /rooms
    title: Winter School 2021 - group discussions rooms
    rooms:
      - title: "Winter Hiking: How to Start"
        link: https://mit.zoom.us/j/94450959676
      - title: "Winter Hiking: Above Treelines"
        link: https://zoom.us/j/94813286183?pwd=N3hYemNab3AzNlB0bjJXNFJWV1d3QT09
      - title: Winter Camping
        link: https://us04web.zoom.us/j/77968489462?pwd=cWZHdlhaejZHRFo3dUp5UjR2M2VEZz09
      - title: The Joy of Ice Climbing
        link: https://mit.zoom.us/j/92406990136
      - title: Enjoying Winter
        link: https://analog.zoom.us/j/92202544330?pwd=UDlPTVBkSm8xNlUvMzIwZHY2bzQ1UT09
      - title: Women in the Outdoors (Open to all who identify as women or non-binary)
        link: https://mit.zoom.us/j/91023986078
---

{% for room in page.rooms%}
- [**{{room.title}}** - {{room.link}}]({{room.link}})
{% endfor %}

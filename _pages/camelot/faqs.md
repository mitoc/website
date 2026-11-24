---
permalink: /camelot/faqs
layout: bunkhouse
title: Frequently asked questions
---
{% comment %}
  Questions and answers live in _data/bunkhouse_faqs.yml.
  Question headings are plain Markdown so kramdown generates the same
  anchor IDs as before (existing deep links keep working).
  %donate_link%, %donate_page% and %key% placeholders (one per key under `facts:` in
  bunkhouse_settings.yml) are replaced in both questions and answers.
{% endcomment %}
{% assign settings = site.data.bunkhouse_settings %}

<span id="faq-top"></span>

Can't find your answer? Email [mitoc-bunkhouse@mit.edu](mailto:mitoc-bunkhouse@mit.edu).

{% for group in site.data.bunkhouse_faqs %}
* [{{ group.title }}](#{{ group.id }})
{%- endfor %}
{: .faq-jump-list}

{% for group in site.data.bunkhouse_faqs %}
## {{ group.title }}
{: #{{ group.id }} .faq-group-heading}

{% for q in group.questions %}
{%- assign question = q.question -%}
{%- assign answer = q.answer | replace: "%donate_link%", settings.donate_link | replace: "%donate_page%", settings.donate_page -%}
{%- for fact in settings.facts -%}
  {%- assign token = "%" | append: fact[0] | append: "%" -%}
  {%- assign question = question | replace: token, fact[1] -%}
  {%- assign answer = answer | replace: token, fact[1] -%}
{%- endfor %}
{% for old_id in q.old_ids %}<span id="{{ old_id }}"></span>{% endfor %}
### {{ question }}
{: .faq-question}

{{ answer }}
{% endfor %}

[↑ Back to top](#faq-top){: .faq-back-to-top}
{% endfor %}

---
permalink: /camelot/handouts
layout: bunkhouse
title: Handouts
description: "Printable handouts about the Camelot bunkhouse and the MIT Outing Club."
# One card per document, in this order.
#   file:     the PDF, under /docs/camelot/
#   download: file name used when someone clicks Download
#   thumb:    image of the first page, about 480px wide (images/bunkhouse/documents/)
documents:
  - title: The MITOC Bunkhouse
    kicker: Frequently asked questions
    file: /docs/camelot/bunkhouse_faq.pdf
    download: MITOC Bunkhouse FAQ.pdf
    thumb: /images/bunkhouse/documents/bunkhouse-faq.jpg
    details: 2 pages · PDF · 2.2 MB
    summary: "A two-page handout on the motivation, history, and future of the bunkhouse project: why Camelot needs it, what it will include, what it costs, and how to help."
  - title: MITOC Updates
    kicker: A decade in review, 2016–2025
    file: /docs/camelot/mitoc_updates.pdf
    download: MITOC Updates.pdf
    thumb: /images/bunkhouse/documents/mitoc-updates.jpg
    details: 1 page · PDF · 1.1 MB
    summary: "The club by the numbers over the past decade. News on paddling, circuses, the student financial aid program, Winter School, School of Rock, the Collier Adventure Grant, and so much more!"
---

Succinct overview documents. For more detailed answers and additional questions, see the [FAQs](/camelot/faqs).

<ul class="bunkhouse-doc-list">
{% for doc in page.documents %}
  <li class="bunkhouse-doc">
    <a href="{{ doc.file }}" class="bunkhouse-doc-thumb" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true"><img src="{{ doc.thumb }}" alt="" width="480" height="621" loading="lazy"></a>
    <div class="bunkhouse-doc-head">
      <p class="bunkhouse-doc-kicker">{{ doc.kicker }}</p>
      <h2><a href="{{ doc.file }}" target="_blank" rel="noopener">{{ doc.title }}</a></h2>
      <p class="bunkhouse-doc-details">{{ doc.details }}</p>
    </div>
    <p class="bunkhouse-doc-summary">{{ doc.summary }}</p>
    <p class="bunkhouse-doc-actions">
      <a href="{{ doc.file }}" class="bunkhouse-pill" target="_blank" rel="noopener">View PDF</a>
      <a href="{{ doc.file }}" class="bunkhouse-pill bunkhouse-pill-outline" download="{{ doc.download }}">Download</a>
    </p>
  </li>
{% endfor %}
</ul>

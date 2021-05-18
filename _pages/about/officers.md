---
    permalink: /about/officers
    title: Club Officers
---

<div>
  {% for category in site.data.positions %}
    <h3>{{ category.title }}</h3>
    <div class="row is-flex">
      {% for position in category.positions %}
        {% for officer_id in position.officers %}
          {% assign officer = site.data.officers[officer_id] %}
          <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
            <img height="100" width="100" alt="" src="/images/leaders/{{ officer.photo | default: 'beaver.jpg'}}"/>
            <em>{{ officer.name }}<br/>
            {{ position.title }}<br/></em>
            {{ position.description }}
          </div>
        {% endfor %}
      {% endfor %}
    </div>
  {% endfor %}
</div>

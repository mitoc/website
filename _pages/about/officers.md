---
    permalink: /about/officers
    title: Club Officers
---

## Become a Club Officer

Interested in become a club officer? Join the Board of Directors (BOD)! We are a group of members and volunteers who all care deeply about the club and enabling the MITOC community to enjoy being outside. We do everything from organizing Winter School, maintaining our gear and cabins, to recruiting new leaders and members.

We have elections for positions each year, generally in late spring. Nevertheless, anyone excited about committing time and passion to the club is welcome at any time. BOD is not a fixed size or a closed club, but a fluctuating group of fun folks, constantly looking for more people to get excited and integrated into the MITOC family. Keep an eye on the email lists for announcements of monthly meetings, which are open to all MITOC members. If you have a specific idea you want to spearhead, email [mitoc-owner@mit.edu](mailto:mitoc-owner@mit.edu).

## Current Board of Directors
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

## Contact MITOC

To contact the Board of Directors with general questions or comments about the club send mail to [mitoc-owner@mit.edu](mailto:mitoc-owner@mit.edu).

If you have questions about office hours, gear rental, etc., please read the [gear rental information](/rentals) in full. If your question isn't answered there, email the desk workers at [mitoc-desk@mit.edu](mailto:mitoc-desk@mit.edu).

To contact our cabin managers email [camelot-mgr](mailto:camelot-mgr@mit.edu) or [intervale-mgr](mailto:intervale-mgr@mit.edu).

For particular MITOC events, contact:
*   [Winter School](mailto:ws-chair@mit.edu)
*   [Winter Safety Committee](mailto:mitoc-wsc@mit.edu)
*   [Circus](mailto:circus-chair@mit.edu)

For particular MITOC activities, contact:

*   [3 season hiking](mailto:3s-hiking-chair@mit.edu)
*   [Climbing](mailto:climbing-chair@mit.edu)
*   [Backcountry skiing](mailto:bcski-chair@mit.edu)
*   [Mountaineering](mailto:mountaineering-chair@mit.edu)
*   [Mountain biking](mailto:mtnbike-chair@mit.edu)
*   [Boathouse](mailto:boathouse-mgr@mit.edu)
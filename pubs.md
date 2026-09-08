---
layout: default
---

{% assign preprint_pubs = site.publications | where: "category", "preprint" | sort: 'date' | reverse %}
{% if preprint_pubs.size > 0 %}
## Preprints
{% for pre_pub in preprint_pubs %}
{% include publication.html pub=pre_pub %}
{% endfor %}
{% endif %}

{% assign pr_pubs = site.publications | where: "category", "peer_reviewed" | sort: 'date' | reverse %}
{% if pr_pubs.size > 0 %}
## Peer-Reviewed Publications
{% for pub in pr_pubs %}
{% include publication.html pub=pub %}
{% endfor %}
{% endif %}

{% assign conference_pubs = site.publications | where: "category", "competition" %}
{% if conference_pubs.size > 0 %}
## Research Competitions
{% for conf_pub in conference_pubs%}
{% include publication.html pub=conf_pub %}
{% endfor %}
{% endif %}

{% assign talk_pubs = site.publications | where: "category", "talk" %}
{% if talk_pubs.size > 0 %}
## Talks
{% for talk_pub in talk_pubs %}
{% include publication.html pub=talk_pub %}
{% endfor %}
{% endif %}

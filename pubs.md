---
layout: default
---

## Preprints
{% assign preprint_pubs = site.publications | where: "category", "preprint" | sort: 'date' | reverse %}
{% for pre_pub in preprint_pubs %}
{% include publication.html pub=pre_pub %}
{% endfor %}

## Peer-Reviewed Publications
{% assign pr_pubs = site.publications | where: "category", "peer_reviewed" | sort: 'date' | reverse %}
{% for pub in pr_pubs %}
{% include publication.html pub=pub %}
{% endfor %}

## Research Competitions
{% assign conference_pubs = site.publications | where: "category", "competition" %}
{% for conf_pub in conference_pubs%}
{% include publication.html pub=conf_pub %}
{% endfor %}

## Talks
{% assign talk_pubs = site.publications | where: "category", "talk" %}
{% for talk_pub in talk_pubs %}
{% include publication.html pub=talk_pub %}
{% endfor %}
---
layout: empty
post: ./_includes/publication.html
---

## Preprints
{% assign preprint_pubs = site.publications | where: "category", "preprint" %}
{% for pre_pub in preprint_pubs%}
{% include publication.html pub=pre_pub %}
{% endfor %}

## Research Competitions
{% assign conference_pubs = site.publications | where: "category", "competition" %}
{% for conf_pub in conference_pubs%}
{% include publication.html pub=conf_pub %}
{% endfor %}

## Artifacts & Demonstrations
{% assign artifact_pubs = site.publications | where: "category", "artifact" %}
{% for art_pub in artifact_pubs%}
{% include publication.html pub=art_pub %}
{% endfor %}

## Talks
{% assign talk_pubs = site.publications | where: "category", "talk" %}
{% for talk_pub in talk_pubs %}
{% include publication.html pub=talk_pub %}
{% endfor %}
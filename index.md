---
layout: default
post: ./_includes/publication.html
---
# Research

I'm a PhD student in Software Engineering at Carnegie Mellon University's [Institute for Software Research](https://www.isri.cmu.edu/). I am advised by [Dr. Jonathan Aldrich](https://www.cs.cmu.edu/~aldrich/) and [Dr. Joshua Sunshine](https://www.cs.cmu.edu/~jssunshi/). 

Tools that formally verify program correctness tend to require significant up-front investment in annotating source code. I am researching gradual approaches to verification and program analysis to make these practices easier to adopt without compromising on soundness or effectiveness. 

I am currently collaborating with [Jenna Wise](https://www.cs.cmu.edu/~jlwise/), [Conrad Zimmerman](https://conradz.com/), and Hermant Gouni on the design and implementation of a gradual verifier for the [C0 programming language](http://reports-archive.adm.cs.cmu.edu/anon/2010/CMU-CS-10-145.pdf). We will empirically evaluate the effectiveness of this new gradual verification technique over C0's existing static verifier.

# Publications

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

# Education

I attended the [University of Wisconsin-Eau Claire](https://www.uwec.edu/) from 2017 to 2021, and I completed a double major in Computer Science and English.

[Dr. Chris Johnson](https://www.jmu.edu/cise/cs/people/faculty-staff/johnson-chris.shtml) was my undergraduate research mentor. We built [Twoville](https://twodee.org/blog/18119) and Scute: implementations of a direct manipulation programming language for animating vector graphics.
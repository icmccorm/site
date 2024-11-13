---
layout: about
---
# Research
The Rust programming language is incredibly popular because it is fast and can statically eliminate memory safety errors. However, most critical systems code is still written in C and C++. To interoperate with these applications, Rust developers need to use a set of [unsafe](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html) features that bypass Rust's safety restrictions. If these features are used incorrectly, they can cause unique types of bugs by breaking rules of Rust's aliasing model. [Miri](https://github.com/rust-lang/miri), a Rust interpreter, is the only tool that can detect these bugs, but it is slow and does not support most foreign function calls. I am researching and designing new tools for finding these aliasing bugs in multi-language Rust applications.

## Recent Publications
{% assign preprint_pubs = site.publications | where: "category", "preprint" | sort: 'date' | reverse %}
{% for pre_pub in preprint_pubs limit:2 %}
{% include publication.html pub=pre_pub %}
{% endfor %}

# Education
I attended the [University of Wisconsin-Eau Claire](https://www.uwec.edu/) from 2017 to 2021. I completed a double major in Computer Science and English with a minor in Mathematics. I was introduced to Computer Science research by [Chris Johnson](https://www.jmu.edu/cise/cs/people/faculty-staff/johnson-chris.shtml), and I helped contribute to the design of [Twoville](https://twodee.org/twoville/plateau-2024/): a direct manipulation programming system for computer science education.

In 2020, I was accepted into CMU's [REUSE](https://www.cmu.edu/scs/s3d/reuse/Research/index.html) program, where I joined a collaboration between CMU and Arizona State University. We created [TTPython](http://ccsg.ece.cmu.edu/ttpython/index.html), a macroprogramming systems for the Internet of Things. We used our prototype to implement a mock [autonomous vehicle intersection](https://news.asu.edu/20210716-connected-autonomous-vehicles-make-intersections-safer) and observed significantly reduced latency compared to a prior approach.

I began my PhD in Software Engineering at CMU in September, 2021. My current research on Rust is funded by the National Science Foundation's [Graduate Research Fellowship Program (GRFP)](https://www.nsfgrfp.org/). I'm advised by [Jonathan Aldrich](https://www.cs.cmu.edu/~aldrich/) and [Joshua Sunshine](https://www.cs.cmu.edu/~jssunshi/) in [S3D](https://s3d.cmu.edu/).
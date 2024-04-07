---
layout: about
---
# Research
I study the Rust programming language, which provides guarantees of memory and thread safety without run-time overhead. These properties are crucial for security, as memory safety bugs have lead to the majority of vulnerabilities in [Android](https://source.android.com/docs/security/test/memory-safety) and [Chromium](https://www.chromium.org/Home/chromium-security/memory-safety/). Rust's *borrow checker* provides these guarantees by restricting the programs that developers can write. When these restrictions become burdensome, developers can enable a set of [unsafe](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html) features that bypass the borrow checker. These features are difficult to use correctly, and can introduce security vulnerabilities through undefined behavior. 

My goal is to make it easier for developers to use unsafe correctly. To make this possible, I am currently researching methods for *gradually verifying* that Rust programs are free of undefined behavior. [Gradual verification](https://www.cs.cmu.edu/~aldrich/papers/vmcai2018-gradual-verification.pdf) enables developers to write partial, incomplete specifications for their programs, with the remaining properties checked at run-time. A gradual version of Miri's [Tree Borrows](https://www.ralfj.de/blog/2023/06/02/tree-borrows.html) model will enable Rust developers to lift their test cases *step-by-step* into complete, static specifications that their programs are free of undefined behavior.

## Recent Publications
{% assign preprint_pubs = site.publications | where: "category", "preprint" | sort: 'date' | reverse %}
{% for pre_pub in preprint_pubs limit:2 %}
{% include publication.html pub=pre_pub %}
{% endfor %}


# Education
I attended the [University of Wisconsin-Eau Claire](https://www.uwec.edu/) from 2017 to 2021. I completed a double major in Computer Science and English with a minor in Mathematics. I was introduced to Computer Science research by [Chris Johnson](https://www.jmu.edu/cise/cs/people/faculty-staff/johnson-chris.shtml), and I helped contribute to the design of [Twoville](https://twodee.org/twoville/plateau-2024/): a direct manipulation programming system for computer science education.

In 2020, I was accepted into CMU's [REUSE](https://www.cmu.edu/scs/s3d/reuse/Research/index.html) program, where I joined a collaboration between CMU and Arizona State University. We created [TTPython](http://ccsg.ece.cmu.edu/ttpython/index.html), a macroprogramming systems for the Internet of Things. We used our prototype to implement a mock [autonomous vehicle intersection](https://news.asu.edu/20210716-connected-autonomous-vehicles-make-intersections-safer) and observed significantly reduced latency compared to a prior approach.

I began my PhD in Software Engineering at CMU in September, 2021. My current research on Rust is funded by the National Science Foundation's [Graduate Research Fellowship Program (GRFP)](https://www.nsfgrfp.org/). I'm advised by [Jonathan Aldrich](https://www.cs.cmu.edu/~aldrich/) and [Joshua Sunshine](https://www.cs.cmu.edu/~jssunshi/) in [S3D](https://s3d.cmu.edu/).
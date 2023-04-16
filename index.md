---
layout: default
post: ./_includes/publication.html
---
# Research
I'm a PhD student in Software Engineering at Carnegie Mellon University's Software and Societal Systems Department ([S3D](https://s3d.cmu.edu/)). I am advised by [Dr. Jonathan Aldrich](https://www.cs.cmu.edu/~aldrich/) and [Dr. Joshua Sunshine](https://www.cs.cmu.edu/~jssunshi/). 

Broadly, I focus on the intersection of human-computer interaction and formal methods. Currently, I'm studying the unsafe features of the Rust programming language, which allow unrestricted access to memory and support for calling foreign functions. This is necessary for effective systems programming, but can break the invariants of Rust's borrow checker, reintroducing the memory safety issues that Rust was designed to prevent. By learning from developers' experiences, we can design and improve tools that assist with writing unsafe Rust, improving its usability and ensuring memory safety.

Prior to my focus on unsafe Rust, I collaborated with [Jenna Wise](https://www.cs.cmu.edu/~jlwise/) on the design and implementation of Gradual C0, a gradual verification tool for the [C0](http://reports-archive.adm.cs.cmu.edu/anon/2010/CMU-CS-10-145.pdf) programming language. In 2022, we evaluated this approach against multiple, fully-dynamic baselines and observed a significant reduction in runtime overhead.

# Education
I attended the [University of Wisconsin-Eau Claire](https://www.uwec.edu/) from 2017 to 2021, where I completed a double major in Computer Science and English, with an emphasis on rhetoric of science, technology, and culture. I was introduced to Computer Science research by [Chris Johnson](https://www.jmu.edu/cise/cs/people/faculty-staff/johnson-chris.shtml). At the time, Chris was developing [TwoVille](https://twoville.org/#index), a direct manipulation programming language for creating SVG animations. This project emphasized the importance of user-oriented design and introduced me to the fundamentals of programming language implementation.

In 2020, I was accepted into CMU's [REUSE](https://www.cmu.edu/scs/s3d/reuse/Research/index.html) program, where I joined a collaboration between CMU and Arizona State University. We created [TTPython](http://ccsg.ece.cmu.edu/ttpython/index.html), a macroprogramming systems for the Internet of Things. We used our prototype to reimplement a mock autonomous vehicle intersection and observed significantly reduced latency between devices, exemplifying how emphasizing the usability in programming language design can increase the objective performance of software applications. Our prototype implementation took 2nd place in a design competition at the 2021 CPS-IoT Week.

My current research on unsafe Rust is funded by the National Science Foundation's Graduate Research Fellowship Program (GRFP). It continues in the sprit of each of my past projects, translating developers challenges into solutions that improve usability *and* demonstrably improve performance or quality metrics.
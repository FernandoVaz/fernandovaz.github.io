---
layout: post
title:  "Understanding Java Generics"
date:   2022-01-04 22:40:06 -0300
categories: Java
---

### Introduction to Generics ###

What is Generics? If you found this blog somehow you`re trying to discover in a more light-hearted manner what the fuck generics is, and how to apply that in java.

<br>

Well, according to [Wikipedia_Generics], Generics programming is just a style, a way o writing code, in which the algorithms accepts types that are defined later on function evaluation. Its kinda obvious when you think about the word generics and what it does, but don't be fooled, computer science have come a long way to allow generics to be a thing and there's much to it hidden underneath the code.

<br>

Why we need generics? To DRY (Don't repeat yourself).

Imagine you have a codebase that does the same thing but is copied and paste all over, and after all that you find a bug that will happen everywhere the implementation of the code will be. You'll have to modify tons of line of code and it will take you a long time to do so. With generics you can create a template that its easier to do modifications and extensions

<br> 

### References ###
* [Wikipedia-Timezones]
* [Maaike-Youtube-vid]


[Maaike-Youtube-vid]: youtube.com/watch?v=0XgdX5hDL4U
[Wikipedia-Timezones]: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
[Wikipedia-Generics]: https://en.wikipedia.org/wiki/Generic_programming
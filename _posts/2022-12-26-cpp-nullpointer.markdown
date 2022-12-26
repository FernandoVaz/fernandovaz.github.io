---
layout: post
title:  "How nullpointers work in Cpp"
date:   2021-12-26 22:40:06 +0200
categories: C++
---

This is basically a transcript from this amazing video by The Cherno. If you dont know him make sure you follow his videos. Great content really well explained :)

[The Cherno Video about nullptr]

````
int main() {
    
    void* value = nullptr;

    std::cin.get();
}
````

If we debug this code, with a break point on value, we will see that the value holds an address that is: 0x00000000

So the answer for what is a nullpointer in C++ is just "Its a memory address".

The reason that our code crashes when we try to read from it its because it is a *valid* memory address. Thats why a read access violation is "thrown" during runtime. Code will compile fine but when it tries to read the memory it will not know where the address is and crash.

Cool stuff

[The Cherno Video about nullptr]: https://www.youtube.com/watch?v=PksUUwvq-po

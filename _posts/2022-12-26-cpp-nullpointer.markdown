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

````
class TestClass {

public:
    TestClass() = default;

    const std::string& GetName() const { return m_Name; };

    uint64_t getClassNumber() 
    {
        return m_ClassNumber;
    };

    void PrintType()
    {
        std::cout << "TestClass";
    };

private:
    uint64_t m_ClassNumber;
    TestClass* m_Parent;
    std::string m_Name;
};


int main()
{
    void* value = nullptr;

   // TestClass* testclass = new TestClass(); //Heap

    TestClass* tc = nullptr; //Stack
    std::cout << tc->GetName() << std::endl; //This will not work
    std::cout << "aaa Hello World!\n";
}
````

To understand why null happens when we call GetName and do not happen when we call PrintName() we need to convert the class to how it would work if it was a C program:

````
struct TestStruct
{
    TestStruct* m_Parent; // Pointer on a 64 arch is 8 bytes 0
    std::string m_Name; // 8
};


const std::string& TestStructGetName(const TestStruct* self)
{
    // If self is null it will dereference from an illegal memory, 
    // hence you get memory access violation
    return self->m_Name;
}


void TestStructPrintType(TestStruct* self) {
    // This does not crash because we dont use the self pointer, or this pointer.
    // Hence crashing does not happen
    std::cout << "TestClass";
}

int main()
{
    void* value = nullptr;

    // TestClass* testclass = new TestClass(); //Heap

    TestClass* tc = nullptr; //Stack
    // std::cout << tc->GetName() << std::endl;
    std::cout << "Name: " << tc->GetName();

}
````

The self keyword is "This" pointer, if the class instance is a nullptr, self will reference to it and in the method *TestStructGetName* it will crash because self->m_Name is an access violation
PrintType however, does not use self at all, this is why we dont get illegal access while calling that method.

Further explanation can be obtained through offset macro:

````
int main()
{
    void* value = nullptr;

    // TestClass* testclass = new TestClass(); //Heap

    TestClass* tc = nullptr; //Stack
    // std::cout << tc->GetName() << std::endl;
    std::cout << "Name: " << tc->GetName();

    uint64_t offset = offsetof(TestStruct, m_Name);
    std::cout << "Offset of m_Name " << offset << std::endl;

    offset = (uint64_t) &((TestStruct*)0)->m_Name;

    // (TestStruct*)0 Is a nullpointer as a reference
    
    // (TestStruct*)nullptr is the same thing as above
    
    // ((TestStruct*)0)->m_Name This would generate a read access violation
    
    // &((TestStruct*)0)->m_Name The reference keyword looks at the location of this in memory, 
    // since its relative to 0 it gives the offset


    // (uint64_t) &((TestStruct*)0)->m_Name cast the offset to integer
    std::cout << "Offset of m_Name " << offset << std::endl;

    tc->PrintType();

    std::cout << "aaa Hello World!\n";
}
````


Cool stuff

[The Cherno Video about nullptr]: https://www.youtube.com/watch?v=PksUUwvq-po

## Quick Definitions

* Generics is an abstraction over types
* Polymorphism is a sum-type pattern
* Composition is a product-type pattern
* Most OO tends to lean towards polymorphism


## C++


```c++
#include <iostream>
#include <string>


template <T>
void Print(T value) 
{
    std::cout << value << std::endl;
}

int main() {
  Print(5);
  return 0;
}

```

## Java

```java
public class GenericsType<T> {

	private T t;
	
	public T get(){
		return this.t;
	}
	
	public void set(T t1){
		this.t=t1;
	}
}
```

## Javascript

```javascript
function identity<T>(arg: T): T {
	return arg;
}
```



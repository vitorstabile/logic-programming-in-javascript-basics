<h1 align="center"> JavaScript </h1>

# Content

1. [Chapter 1: The JavaScript Language](#chapter1)
    - [Chapter 1 - Part 1: First Program in JavaScript](#chapter1part1)
    - [Chapter 1 - Part 2: Variables Types in JavaScript](#chapter1part2)
    - [Chapter 1 - Part 3: Data Output in JavaScript](#chapter1part3)
    - [Chapter 1 - Part 4: Data Processing in JavaScript](#chapter1part4)
    - [Chapter 1 - Part 5: Data Casting in JavaScript](#chapter1part5)
    - [Chapter 1 - Part 6: Data Input in JavaScript](#chapter1part6)
    - [Chapter 1 - Part 7: Conditional Statement in JavaScript](#chapter1part7)
    - [Chapter 1 - Part 8: While Statement in JavaScript](#chapter1part8)
    - [Chapter 1 - Part 9: For Statement in JavaScript](#chapter1part9)
    - [Chapter 1 - Part 10: Vectors in JavaScript](#chapter1part10)
    - [Chapter 1 - Part 11: Matrix in JavaScript](#chapter1part11)
2. [Chapter 2: Object Oriented](#chapter2)
    - [Chapter 2 - Part 1: Abstraction](#chapter2part1)
    - [Chapter 2 - Part 2: Encapsulation](#chapter2part2)
    - [Chapter 2 - Part 3: Inheritance](#chapter2part3)
    - [Chapter 2 - Part 4: Polymorphism](#chapter2part4)
  
## <a name="chapter1"></a>Chapter 1: The JavaScript Language

#### <a name="chapter1part1"></a>Chapter 1 - Part 1: First Program in JavaScript

```js

console.log('Hello World');

```

#### <a name="chapter1part2"></a>Chapter 1 - Part 2: Variables Types in JavaScript

```js

var x;
let y;

```

Both ```var``` and ```let``` are used to declare variables. However, there are some differences between them.

| ```var```                                                            | ```let```                                                               |
|:---------------------------------------------------------------------|:------------------------------------------------------------------------|
| ```var``` is used in the older versions of JavaScript                | ```let``` is the new way of declaring variables starting ES6 (ES2015).  |
| ```var``` is function scoped (will be discussed in later tutorials). | ```let``` is block scoped (will be discussed in later tutorials).       |
| For example, ```var x;```                                            | For example, ```let y;```                                               |


```js

let x;
x = 5;

console.log(x);

```

```js

y = 6, z = 7;

console.log(y);
console.log(z);

```

The ```const``` keyword was also introduced in the ES6(ES2015) version to create constants.

```js

const x = 5;

```

Once a constant is initialized, we cannot change its value.

```js

const x = 5;
x = 10;  // Error! constant cannot be changed.
console.log(x)

```

| Data Types      | Description                                        | Example                                   |
|:----------------|:---------------------------------------------------|:------------------------------------------|
| ```String```    | Represents textual data                            | ```'hello'```, ```"hello world!"``` etc   |
| ```Number```    | An integer or a floating-point number              | ```3```, ```3.234```, ```3e-2``` etc.     |
| ```BigInt```    | An integer with arbitrary precision                | ```900719925124740999n``` , ```1n``` etc. |
| ```Boolean```   | Any of two values: true or false                   | ```true``` and ```false```                |
| ```undefined``` | A data type whose variable is not initialized      | ```let a;```                              |
| ```null```      | Denotes a ```null``` value                         | ```let a = null;```                       |
| ```Symbol```    | Data type whose instances are unique and immutable | ```let value = Symbol('hello');```        |
| ```Object```    | key-value pairs of collection of data              | ```let student = { };```                  |



#### <a name="chapter1part3"></a>Chapter 1 - Part 3: Data Output in JavaScript

#### <a name="chapter1part4"></a>Chapter 1 - Part 4: Data Processing in JavaScript

#### <a name="chapter1part5"></a>Chapter 1 - Part 5: Data Casting in JavaScript

#### <a name="chapter1part6"></a>Chapter 1 - Part 6: Data Input in JavaScript

#### <a name="chapter1part7"></a>Chapter 1 - Part 7: Conditional Statement in JavaScript

#### <a name="chapter1part8"></a>Chapter 1 - Part 8: While Statement in JavaScript

#### <a name="chapter1part9"></a>Chapter 1 - Part 9: For Statement in JavaScript

#### <a name="chapter1part10"></a>Chapter 1 - Part 10: Vectors in JavaScript

#### <a name="chapter1part11"></a>Chapter 1 - Part 11: Matrix in JavaScript

## <a name="chapter2"></a>Chapter 2: Object Oriented

#### <a name="chapter2part1"></a>Chapter 2 - Part 1: Abstraction

How it represents a real object in our system. It must have identity (Class) given by properties (attributes) and methods (functions).

o Class: Structured type that can contain members - Representation of an entity (Product, Customer), service (ProductService, CustomerService), drivers (ProductController), utilities (calculator) and others (views, repositories).
o Attributes (Data or Fields - Ex: Customer has attribute name, email, cpf and etc.)
o Methods (Class functions and operations - Ex: Consult email, consult cpf, change cpf)

• A class can also have:
o Constructors (Special class operation, performed at instantiation of the class. Used to start attribute values ​​or to force the object to receive data or dependency on its instantiation (Dependency injection))
o Overload of constructors or methods (Esoecify more than one constructor or method in the class)
Encapsulation (Getters and Setters)
o Inheritance (from whom this class inherits)
Polymorphism (A class has several forms or functions)

• Object: They are the instance of the class or instance of the type - Ex: Product p1, Client customer1
• Class: It is the definition of the type (Customer Class, Product Class)

• Instantiation: When we instantiate primitive variables (double, int, String ...) it is instantiated in the memory stack. When the command New in Objects, Arrays and Lists is communicated, the dynamic location of memory occurs, where the object is allocated in another area of memory, called Heap and the object will point to the memory address.

• Advantages of object orientation:
o Reuse of the code and delegation of responsibilities

#### <a name="chapter2part2"></a>Chapter 2 - Part 2: Encapsulation

Adds security to an object-oriented application, as it hides class properties.

o An object must not expose any attributes (use of access modifiers - private, protected ...)
o Class attributes are usually accessed by special methods (Getters and Setters), avoiding direct access to the object's property.
o Analogy with a television: When you click on the call button, we do not know what happens internally on the TV. We can say that the methods that connect the TV are encapsulated.

#### <a name="chapter2part3"></a>Chapter 2 - Part 3: Inheritance

Type of association between classes that allows a class to inherit all data and behavior from another

o Can be used for code reuse
o Used for polymorphism - A class has several uses
The whole class java me, inherits from Object (Warper Classes)

#### <a name="chapter2part4"></a>Chapter 2 - Part 4: Polymorphism

A feature that allows variables of the same more generic type to be able to point to objects of different specific types, thus having different behaviors according to each specific type. In some cases, we must perform the upcasting or dowcasting of the object.

<!-- URL's -->

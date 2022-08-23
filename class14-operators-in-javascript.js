// arithmetic operators

var num = 0; // Assignment 
num = num + 2; // num = 2 Addition
num = num - 0; // num = 2 Subtraction
num = num * 3; // num = 6 Multiplication
num = num / 2; // num = 3 Division
num++; // num = 4
num--; // num = 3

1 + 2 // => 3: addition
"1" + "2" // => "12": concatenation
"1" + 2 // => "12": concatenation after number-to-string
1 + {} // => "1[object Object]": concatenation after object-to-string
true + true // => 2: addition after boolean-to-number

// assignment operators

num += 1; // num = 4 Addition assignment (x += y) == (x = x + y)
num -= 2; // num = 2 Subtraction assignment (x -= y) == (x = x - y)
num *= 3; // num = 6 Multiplication assignment (x *= y) == (x = x * y)
num /= 2; // num = 3 Division assignment (x /= y) == (x = x / y)
// % Modulus (remainder of a division operation)
num %= 3; //mod division num = 0; Remainder assignment (x %= y) == (x = x % y)


var i = 1, j = ++i; // i and j are both 2
var i = 1, j = i++; // i is 2, j is 1

// comparison operators

console.log('num == 1 : ' + (num == 1)); // Equal to: //false
console.log('num === 1 : ' + (num === 1)); // Equal to (both value and object type) //false
console.log('num != 1 : ' + (num != 1)); //  Not equal to //true
console.log('num > 1 : ' + (num > 1)); // Greater than //false
console.log('num < 1 : ' + (num < 1)); // Greater than or equal to //true
console.log('num >= 1 : ' + (num >= 1)); // Less than //false
console.log('num <= 1 : ' + (num <= 1)); // Less than or equal to //true

// logical operators

console.log('true && false : ' + (true && false)); // And //false
console.log('true || false : ' + (true || false)); // Or //true
console.log('!true : ' + (!true)); // Not //false

// bitwise operators

console.log('5 & 1:', (5 & 1)); // AND //1
console.log('5 | 1:', (5 | 1)); // OR //5
console.log('~ 5:', (~5)); // NOT //-6
console.log('5 ^ 1:', (5 ^ 1)); // Xor //4
console.log('5 << 1:', (5 << 1)); // left shoft //10
console.log('5 >> 1:', (5 >> 1)); // rigth shift //2

// in operator

var point = { x:1, y:1 }; // Define an object
console.log("x" in point); // => true: object has property named "x"
console.log("z" in point); // => false: object has no "z" property.
console.log("toString" in point); // => true: object inherits toString method

var data = [7,8,9]; // An array with elements 0, 1, and 2
console.log("0" in data); // => true: array has an element "0"
console.log(1 in data); // => true: numbers are converted to strings
console.log(3 in data); // => false: no element 3

// instanceof operator

var d = new Date(); // Create a new object with the Date() constructor
console.log(d instanceof Date); // Evaluates to true; d was created with Date()
console.log(d instanceof Object); // Evaluates to true; all objects are instances of Object
console.log(d instanceof Number); // Evaluates to false; d is not a Number object
var a = [1, 2, 3] // Create an array with array literal syntax
console.log(a instanceof Array); // Evaluates to true; a is an array
console.log(a instanceof Object); // Evaluates to true; all arrays are objects
console.log(a instanceof RegExp); // Evaluates to false; arrays are not regular expressions

// typeof operator

var num = 0;
console.log('typeof num:', typeof num); // typeof num: number
console.log('typeof Packt:', typeof 'Packt'); // typeof Packt: string
console.log('typeof true:', typeof true); // typeof true: boolean
console.log('typeof [1,2,3]:', typeof [1,2,3]); // typeof [1,2,3]: object
console.log('typeof {name:John}:', typeof {name:'John'}); // typeof {name:John}: object

// delete operator

var o = { x: 1, y: 2}; // Start with an object
delete o.x; // Delete one of its properties
console.log("x" in o); // => false: the property does not exist anymore
var a = [1,2,3]; // Start with an array
delete a[2]; // Delete the last element of the array
console.log(a); // => [ 1, 2, <1 empty item> ]
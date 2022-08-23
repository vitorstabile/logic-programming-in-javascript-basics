//how to declare a array in JavaScript

//Type1

var fruit_list = Array();

fruit_list[1] = "Banana";
fruit_list[2] = "Maça";
fruit_list[3] = "Morango";
fruit_list[4] = "Uva";

console.log(fruit_list[1]);

//Type2

var fruit_list2 = [];

fruit_list2[1] = "Banana";
fruit_list2[2] = "Maça";
fruit_list2[3] = "Morango";
fruit_list2[4] = "Uva";

console.log(fruit_list2[3]);

//Type3 - When we dont tell the key of the array, he will initiate in 0 position

var fruit_list3 = Array("Banana", "Maça", "Morando", "Uva");

console.log(fruit_list3[0]);

//Type4 - When we dont tell the key of the array, he will initiate in 0 position

var fruit_list4 = ["Banana", "Maça", "Morando", "Uva"];

console.log(fruit_list4[1]);

var things_list = Array();

//We can add a new array in a array. Like a dictionary

things_list['frutas'] = Array();
things_list['pessoas'] = Array();

things_list['frutas'][1] = "Banana";
things_list['frutas'][2] = "Maça";
things_list['frutas'][3] = "Morango";

things_list['pessoas'][1] = "João";
things_list['pessoas'][2] = "José";
things_list['pessoas'][3] = "Maria";

console.log(things_list["frutas"][2]);
console.log("<br />");
console.log(things_list["pessoas"][1]);

/* Another type of declaration

things_list['frutas'] = Array("Banana", "Maça", "Morango");

document.write(things_list["frutas"][0]);

*/

// Creating Arrays

var empty = []; // An array with no elements
var primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
var misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma

var base = 1024;
var table = [base, base+1, base+2, base+3];

console.log(table);

var count = [1,,3]; // An array with 3 elements, the middle one undefined.
var undefs = [,,]; // An array with 2 elements, both undefined.

// Using new

var a = new Array(); // Call it with no arguments

/*

This method creates an empty array with no elements and is equivalent to the array
literal [].

*/

var a = new Array(10); // Call it with a single numeric argument, which specifies a length

var a = new Array(5, 4, 3, 2, 1, "testing, testing");

console.log(a);

// Reading and Writing array elements

var a = ["world"]; // Start with a one-element array
var value = a[0]; // Read element 0

console.log(value);

a[1] = 3.14; // Write element 1
i = 2;
a[i] = 3; // Write element 2
a[i + 1] = "hello"; // Write element 3
a[a[i]] = a[0]; // Read elements 0 and 2, write element 3

console.log(a[a[i]] = a[0]);

// Array Length

a = [1,2,3,4,5]; // Start with a 5-element array.
a.length = 3; // a is now [1,2,3].
a.length = 0; // Delete all elements. a is [].
a.length = 5; // Length is 5, but no elements, like new Array(5)

// Adding and Deleting a Array a Element in Array

a = [] // Start with an empty array.
a[0] = "zero"; // And add elements to it.
a[1] = "one";

a = []; // Start with an empty array
a.push("zero") // Add a value at the end. a = ["zero"]
a.push("one", "two") // Add two more values. a = ["zero", "one", "two"]

a = [1,2,3];
delete a[1]; // a now has no element at index 1
1 in a // => false: no array index 1 is defined
a.length // => 3: delete does not affect array length

console.log(a.length)

// Multidimensional Arrays

// Create a multidimensional array
var table = new Array(10); // 10 rows of the table
for(var i = 0; i < table.length; i++)
    table[i] = new Array(10); // Each row has 10 columns

// Initialize the array
for(var row = 0; row < table.length; row++) {
    for(col = 0; col < table[row].length; col++) {
        table[row][col] = row*col;
    }
}

// Use the multidimensional array to compute 5*7

var product = table[5][7]; // 35

console.log(table[5][7]);
console.log(table[9][9]);

// Arrays Methods

// join - The Array.join() method converts all the elements of an array to strings and concatenates
// them, returning the resulting string.

var a = [1, 2, 3]; // Create a new array with these three elements
a.join(); // => "1,2,3"
a.join(" "); // => "1 2 3"
a.join(""); // => "123"
var b = new Array(10); // An array of length 10 with no elements
b.join('-') // => '---------': a string of 9 hyphens

// rever() - The Array.reverse() method reverses the order of the elements of an array and returns
// the reversed array.

var a = [1,2,3];
a.reverse().join() // => "3,2,1" and a is now [3,2,1]

// sort()

/*

Array.sort() sorts the elements of an array in place and returns the sorted array. When
sort() is called with no arguments, it sorts the array elements in alphabetical order

*/

var a = new Array("banana", "cherry", "apple");
a.sort();
var s = a.join(", "); // s == "apple, banana, cherry"

/*

To sort an array into some order other than alphabetical, you must pass a comparison
function as an argument to sort(). This function decides which of its two arguments
should appear first in the sorted array. If the first argument should appear before the
second, the comparison function should return a number less than zero. If the first
argument should appear after the second in the sorted array, the function should return
a number greater than zero. And if the two values are equivalent (i.e., if their order is
irrelevant), the comparison function should return 0. So, for example, to sort array
elements into numerical rather than alphabetical order, you might do this:

*/

var a = [33, 4, 1111, 222];
a.sort(); // Alphabetical order: 1111, 222, 33, 4
a.sort(function(a,b) { // Numerical order: 4, 33, 222, 1111
    return a-b; // Returns &lt; 0, 0, or &gt; 0, depending on order
});
a.sort(function(a,b) {return b-a}); // Reverse numerical order

a = ['ant', 'Bug', 'cat', 'Dog']
a.sort(); // case-sensitive sort: ['Bug','Dog','ant',cat']
a.sort(function(s,t) { // Case-insensitive sort
        var a = s.toLowerCase();
        var b = t.toLowerCase();
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
}); // => ['ant','Bug','cat','Dog']

// concat()

/*

Array.concat() method creates and returns a new array that contains the elements
of the original array on which concat() was invoked, followed by each of the arguments
to concat().

*/

var a = [1,2,3];
a.concat(4, 5) // Returns [1,2,3,4,5]
a.concat([4,5]); // Returns [1,2,3,4,5]
a.concat([4,5],[6,7]) // Returns [1,2,3,4,5,6,7]
a.concat(4, [5,[6,7]]) // Returns [1,2,3,4,5,[6,7]]

// slice()

/*

Array.slice() method returns a slice, or subarray, of the specified array.

*/

var a = [1,2,3,4,5];
a.slice(0,3); // Returns [1,2,3]
a.slice(3); // Returns [4,5]
a.slice(1,-1); // Returns [2,3,4]
a.slice(-3,-2); // Returns [3]

// splice()

/*

Array.splice() method is a general-purpose method for inserting or removing
elements from an array. Unlike slice() and concat(), splice() modifies the array on
which it is invoked.

*/

var a = [1,2,3,4,5,6,7,8];
a.splice(4); // Returns [5,6,7,8]; a is [1,2,3,4]
a.splice(1,2); // Returns [2,3]; a is [1,4]
a.splice(1,1); // Returns [4]; a is [1]

// push and pop

/*

The push() and pop() methods allow you to work with arrays as if they were stacks.
The push() method appends one or more new elements to the end of an array and
returns the new length of the array. The pop() method does the reverse: it deletes the
last element of an array, decrements the array length, and returns the value that it
removed.

*/

var stack = []; // stack: []
stack.push(1,2); // stack: [1,2] Returns 2
stack.pop(); // stack: [1] Returns 2
stack.push(3); // stack: [1,3] Returns 2
stack.pop(); // stack: [1] Returns 3
stack.push([4,5]); // stack: [1,[4,5]] Returns 2
stack.pop() // stack: [1] Returns [4,5]
stack.pop(); // stack: [] Returns 1

// unshift() and shift()

/*

The unshift() and shift() methods behave much like push() and pop(), except that
they insert and remove elements from the beginning of an array rather than from the
end. unshift() adds an element or elements to the beginning of the array, shifts the
existing array elements up to higher indexes to make room, and returns the new length
of the array.

*/

var a = []; // a:[]
a.unshift(1); // a:[1] Returns: 1
a.unshift(22); // a:[22,1] Returns: 2
a.shift(); // a:[1] Returns: 22
a.unshift(3,[4,5]); // a:[3,[4,5],1] Returns: 3
a.shift(); // a:[[4,5],1] Returns: 3
a.shift(); // a:[1] Returns: [4,5]
a.shift(); // a:[] Returns: 1

// toString and LocaleString

/*

An array, like any JavaScript object, has a toString() method. For an array, this method
converts each of its elements to a string (calling the toString() methods of its elements,
if necessary) and outputs a comma-separated list of those strings. Note that the output
does not include square brackets or any other sort of delimiter around the array value.

*/

[1,2,3].toString() // Yields '1,2,3'
["a", "b", "c"].toString() // Yields 'a,b,c'
[1, [2,'c']].toString() // Yields '1,2,c'

// ECMAScript 5 Array Methods

// forEach()

/*

The forEach() method iterates through an array, invoking a function you specify for
each element. As described above, you pass the function as the first argument to
forEach(). forEach() then invokes your function with three arguments: the value of the
array element, the index of the array element, and the array itself. If you only care about
the value of the array element, you can write a function with only one parameter—the
additional arguments will be ignored

*/

var data = [1,2,3,4,5]; // An array to sum
// Compute the sum of the array elements
var sum = 0; // Start at 0
data.forEach(function(value) { sum += value; }); // Add each value to sum
sum // => 15
// Now increment each array element
data.forEach(function(v, i, a) { a[i] = v + 1; });
data // => [2,3,4,5,6]

// map()

/*

The map() method passes each element of the array on which it is invoked to the function
you specify, and returns an array containing the values returned by that function.

*/

a = [1, 2, 3];
b = a.map(function(x) { return x*x; }); // b is [1, 4, 9]

// Note that map() returns a new array: it does not modify the array it is invoked on.

// filter ()

/*

The filter() method returns an array containing a subset of the elements of the array
on which it is invoked. The function you pass to it should be predicate: a function that
returns true or false. The predicate is invoked just as for forEach() and map(). If the
return value is true, or a value that converts to true, then the element passed to the
predicate is a member of the subset and is added to the array that will become the return
value.

*/

a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(x) { return x < 3 }); // [2, 1]
everyother = a.filter(function(x,i) { return i%2==0 }); // [5, 3, 1]

// every() and some()

/*

The every() method is like the mathematical “for all” quantifier ∀: it returns true if
and only if your predicate function returns true for all elements in the array

*/

a = [1,2,3,4,5];
a.every(function(x) { return x < 10; }) // => true: all values < 10.
a.every(function(x) { return x % 2 === 0; }) // => false: not all values even.

/*

The some() method is like the mathematical “there exists” quantifier ∃: it returns
true if there exists at least one element in the array for which the predicate returns
true, and returns false if and only if the predicate returns false for all elements of
the array

*/

a = [1,2,3,4,5];
a.some(function(x) { return x%2===0; }) // => true a has some even numbers.
a.some(isNaN)

// reduce(), reduceRight()

/*

reduce() takes two arguments. The first is the function that performs the reduction
operation. The task of this reduction function is to somehow combine or reduce two
values into a single value, and to return that reduced value. In the examples above, the
functions combine two values by adding them, multiplying them, and choosing the
largest. The second (optional) argument is an initial value to pass to the function.

*/

var a = [1,2,3,4,5]
var sum = a.reduce(function(x,y) { return x+y }, 0); // Sum of values
var product = a.reduce(function(x,y) { return x*y }, 1); // Product of values
var max = a.reduce(function(x,y) { return (x>y)?x:y; }); // Largest value

/*

reduceRight() works just like reduce(), except that it processes the array from highest
index to lowest (right-to-left), rather than from lowest to highest. You might want to
do this if the reduction operation has right-to-left precedence, for example:

*/

var a = [2, 3, 4]
// Compute 2^(3^4). Exponentiation has right-to-left precedence
var big = a.reduceRight(function(accumulator,value) {
return Math.pow(value,accumulator);
});

// indexOf() and lastIndexOf()

a = [0,1,2,1,0];
a.indexOf(1) // => 1: a[1] is 1
a.lastIndexOf(1) // => 3: a[3] is 1
a.indexOf(3) // => -1: no element has value 3
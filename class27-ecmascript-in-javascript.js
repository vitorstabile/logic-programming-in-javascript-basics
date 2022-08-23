// let and const instead of var

var framework = 'Angular';
var framework = 'React';
console.log(framework);

// use of the same variable name "framework"

// let -> With the use of let, you can't use the same name for a variable

let language = 'JavaScript!'; // {1}
let language = 'Ruby!'; // {2} - throws error
console.log(language);

// const -> const has a read-only value, meaning a constant value.

const PI = 3.141593;
PI = 3.0; //throws error
console.log(PI);

// Let's take a look at another example of const. 
// We will declare an object as const:

const jsFramework = {
    name: 'Angular'
};

// Let's try changing the name of the jsFramework variable:

jsFramework.name = 'React';

/*

If we try to run this code, it will work. But const variables are read-only! So why
is it possible to run the preceding code? For non-object types such as number,
boolean, and even string, this means we cannot change the variable values.
When working with objects, a read-only const allows the properties of the object
to be reassigned or updated, but the reference to the variable itself (the memory
reference address) cannot be changed, meaning it cannot be reassigned.

If we try to assign a new reference to the jsFramework variable as follows, the
compiler will complain and throw an error ("jsFramework" is read-only):

*/

jsFramework = {
    name: 'Vue' // error, cannot reassign object reference
};

// Variables scope with let and const

let movie = 'Lord of the Rings'; // Global Scope

//var movie = 'Batman v Superman'; // error movie already declared

function starWarsFan() {
    const movie = 'Star Wars'; // local scope of the variable movie
    return movie;              // The global value of movie still is 'Lord of the Rings'
}

function marvelFan() {
    movie = 'The Avengers'; // local scope of the variable movie
    return movie;           // The global value of movie still is 'Lord of the Rings'
}

function blizzardFan() {
    const isFan = true;
    let phrase = 'Warcraft'; // local scope 1 phrase = 'Warcraft'
    console.log('Before if: ' + phrase);
    if (isFan) {
        let phrase = 'initial text'; // local scope 2 phrase = 'initial text'
        phrase = 'For the Horde!'; // local scope 2 phrase = 'For the Horde!'
        console.log('Inside if: ' + phrase);
    }
    phrase = 'For the Alliance!'; // local scope 1 phrase change to 'For the Alliance!'
    console.log('After if: ' + phrase);
}

console.log(movie); // Lord of the Rings
console.log(starWarsFan()); // Star Wars
console.log(marvelFan()); // The Avengers
console.log(movie); // The Avengers
blizzardFan(); // Before if: Warcraft // Inside if: For the Horde! // After if: For the Alliance!


// Template literals

// Template literals are a nice functionality because we can create strings without
// the need to concatenate the values.

const book = {
    name: 'Learning JavaScript DataStructures and Algorithms'
};

console.log('You are reading ' + book.name + '.,\n and this is a new line\n and so is this.');

// With Template literals

console.log(`You are reading ${book.name}.,
and this is a new line
and so is this.`);

/*

Template literals are enclosed by backticks (`). To interpolate a variable value,
we will simply set the variable value inside a dollar sign and curly braces (${}),
as we did with book.name.

*/

// Arrow function

// Arrow functions are a great way of simplifying the syntax of functions

var circleAreaES5 = function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};
console.log(circleAreaES5(2));

// We can simplify the syntax of the preceding code to the following code:

const circleArea = r => { // we can omit the keyword function using =>.
    const PI = 3.14;
    const area = PI * r * r;
    return area;
};
console.log(circleArea(2));

// If the function has a single statement, we can use a simpler version, by omitting
// the keyword return and the curly brackets as demonstrated in the following code
// snippet:

const circleArea2 = r => 3.14 * r * r;
console.log(circleArea2(2));

// If the function does not receive any argument, we use empty parentheses

const hello = () => console.log('hello!');

hello();

// Default parameter values for functions

function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
}
console.log(sum(4, 2)); // outputs 9 - Because Z has a default value z = 3

// Declaring the spread and rest operators

// In ES5, we can turn arrays into parameters using the apply() function. ES2015
// has the spread operator (...) for this purpose.

let params = [3, 4, 5];
console.log(sum(...params));

// same code

console.log(sum.apply(undefined, params));

// The spread operator (...) can also be used as a rest parameter in functions to replace arguments.

function restParamaterFunction(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, 'hello', true, 7)); // output 9

// same code

function restParamaterFunction(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, 'hello', true, 7));

// array destructuring

let [x, y] = ['a', 'b'];

console.log(x); // a
console.log(y); // b

// this code is the same as above

let x = 'a';
let y = 'b';

// swap values

[x, y] = [y, x];

console.log(x); // b
console.log(y); // a

// this code is the same as above

var temp = x;
x = y;
y = temp;

// Property Shortland

let [x, y] = ['a', 'b'];
let obj = { x, y };
console.log(obj); // { x: "a", y: "b" }

// The preceding code is the same as doing the following:

var x = 'a';
var y = 'b';
var obj2 = { x: x, y: y };
console.log(obj2); // { x: "a", y: "b" }

// Shorthand Method Names

const hello = {
    name: 'abcdef',
    printHello() {
        console.log('Hello');
    }
};
console.log(hello.printHello());

// The preceding code can also be written as follows

var hello = {
    name: 'abcdef',
    printHello: function printHello() {
        console.log('Hello');
    }
};
console.log(hello.printHello());
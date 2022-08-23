// Defining JavaScript functions

function sayHello() {
    console.log('Hello!');
}

sayHello(); // To execute the function

// Print the name and value of each property of o. Return undefined.
function printprops(o) {
    for(var p in o)
        console.log(p + ": " + o[p] + "\n");
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x-1);
}

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
var square = function(x) { return x*x; }

// Function expressions can include names, which is useful for recursion.
var f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };

// Function expressions can also be used as arguments to other functions:
data.sort(function(a,b) { return a-b; });

// Function expressions are sometimes defined and immediately invoked:
var tensquared = (function(x) {return x*x;}(10));

// Nested function

function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
}

// Invoking Functions

    // as functions

    printprops({x:1});
    var total = distance(0,0,2,1) + distance(2,1,3,5);
    var probability = factorial(5)/factorial(13);

    // as methods,
    
    o.m = f;
    o.m();

    var calculator = { // An object literal
        operand1: 1,
        operand2: 1,
        add: function() {
            // Note the use of the this keyword to refer to this object.
            this.result = this.operand1 + this.operand2;
        }
    };

    calculator.add(); // A method invocation to compute 1+1.
    calculator.result // => 2

    // as constructors

    var o = new Object();
    var o = new Object;

    // indirectly through their call() and apply() methods.

    function f(x, y, z) {
        check(arguments); // Check that the actual # of args matches expected #.
        return x + y + z; // Now do the rest of the function normally.
        }
    
        f.call(o);
        f.apply(o);

// Function as a Value

var s = square; // Now s refers to the same function that square does
square(4); // => 16
s(4); // => 16

// Function as a NameSpace

function mymodule() {
    // Module code goes here.
    // Any variables used by the module are local to this function
    // instead of cluttering up the global namespace.
}
mymodule(); // But don't forget to invoke the function!

// The Function Constructor

var f = new Function("x", "y", "return x*y;");

var f = function(x, y) { return x*y; }
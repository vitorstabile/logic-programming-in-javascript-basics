// Creating a Object

// new or Object.create()

// Object Literals

var empty = {}; // An object with no properties
var point = { x:0, y:0 }; // Two properties
var point2 = { x:point.x, y:point.y+1 }; // More complex values
var book = {
    "main title": "JavaScript", // Property names include spaces,
    'sub-title': "The Definitive Guide", // and hyphens, so use string literals
    "for": "all audiences", // for is a reserved word, so quote
author: { // The value of this property is
    firstname: "David", // itself an object. Note that
    surname: "Flanagan" // these property names are unquoted.
    }
};

// Creating Objects with new

var o = new Object(); // Create an empty object: same as {}.
var a = new Array(); // Create an empty array: same as [].
var d = new Date(); // Create a Date object representing the current time
var r = new RegExp("js"); // Create a RegExp object for pattern matching.

// Object Prototype

/*

Object.prototype is one of the rare objects that has no prototype: it does not inherit
any properties. Other prototype objects are normal objects that do have a prototype.
All of the built-in constructors (and most user-defined constructors) have a prototype
that inherits from Object.prototype. For example, Date.prototype inherits properties
from Object.prototype, so a Date object created by new Date() inherits properties from
both Date.prototype and Object.prototype. This linked series of prototype objects is
known as a prototype chain.

*/

// Object.create()

// Object.create() is a static function, not a method invoked on individual objects

var o1 = Object.create({x:1, y:2}); // o1 inherits properties x and y.

var o2 = Object.create(null); // o2 inherits no props or methods.

var o3 = Object.create(Object.prototype); // o3 is like {} or new Object().

/*

The ability to create a new object with an arbitrary prototype (put another way: the
ability to create an “heir” for any object) is a powerful one, and we can simulate it in
ECMAScript 3 with a function like the one

*/

// inherit() returns a newly created object that inherits properties from the
// prototype object p. It uses the ECMAScript 5 function Object.create() if
// it is defined, and otherwise falls back to an older technique.

function inherit(p) {
    if (p == null) throw TypeError(); // p must be a non-null object
    if (Object.create) // If Object.create() is defined...
        return Object.create(p); // then just use it.
    var t = typeof p; // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {}; // Define a dummy constructor function.
    f.prototype = p; // Set its prototype property to p.
    return new f(); // Use f() to create an "heir" of p.
}

// Querying and Setting Properties

var book = {
    "main title": "JavaScript", // Property names include spaces,
    'sub-title': "The Definitive Guide", // and hyphens, so use string literals
    "for": "all audiences", // for is a reserved word, so quote
        author: { // The value of this property is
            firstname: "David", // itself an object. Note that
            surname: "Flanagan" // these property names are unquoted.
            }
        };

var author = book.author; // Get the "author" property of the book.
var name = author.surname // Get the "surname" property of the author.
var title = book["main title"] // Get the "main title" property of the book.

book.edition = 6; // Create an "edition" property of book.
book["main title"] = "ECMAScript"; // Set the "main title" property.

console.log(book)
console.log(author);
console.log(author.firstname);
console.log(author.surname);

// Inheritance

/*

Suppose you query the property x in the object o. If o does not have an own property
with that name, the prototype object of o is queried for the property x. If the prototype
object does not have an own property by that name, but has a prototype itself, the query
is performed on the prototype of the prototype. This continues until the property x is
found or until an object with a null prototype is searched. As you can see, the prototype
attribute of an object creates a chain or linked list from which properties are
inherited.


*/

var o = {} // o inherits object methods from Object.prototype
o.x = 1; // and has an own property x.
var p = inherit(o); // p inherits properties from o and Object.prototype
console.log(p);
p.y = 2; // and has an own property y.
var q = inherit(p); // q inherits properties from p, o, and Object.prototype
console.log(q);
q.z = 3; // and has an own property z.
var s = q.toString(); // toString is inherited from Object.prototype
q.x + q.y // => 3: x and y are inherited from o and p

// Deleting Properties

delete book.author; // The book object now has no author property.
delete book["main title"]; // Now it doesn't have "main title", either.

// Testing Properties

/*

JavaScript objects can be thought of as sets of properties, and it is often useful to be
able to test for membership in the set—to check whether an object has a property with
a given name. You can do this with the in operator, with the hasOwnProperty() and
propertyIsEnumerable() methods, or simply by querying the property.

*/

var o = { x: 1 }
"x" in o; // true: o has an own property "x"
"y" in o; // false: o doesn't have a property "y"
"toString" in o; // true: o inherits a toString property

/*

The hasOwnProperty() method of an object tests whether that object has an own property
with the given name. It returns false for inherited properties:

*/

var o = { x: 1 }
o.hasOwnProperty("x"); // true: o has an own property x
o.hasOwnProperty("y"); // false: o doesn't have a property y
o.hasOwnProperty("toString"); // false: toString is an inherited property

/*

The propertyIsEnumerable() refines the hasOwnProperty() test. It returns true only if
the named property is an own property and its enumerable attribute is true. Certain
built-in properties are not enumerable. Properties created by normal JavaScript code
are enumerable unless you’ve used one of the ECMAScript 5 methods shown later to
make them nonenumerable.

*/

var o = inherit({ y: 2 });
o.x = 1;
o.propertyIsEnumerable("x"); // true: o has an own enumerable property x
o.propertyIsEnumerable("y"); // false: y is inherited, not own
Object.prototype.propertyIsEnumerable("toString"); // false: not enumerable

var o = { x: undefined } // Property is explicitly set to undefined
o.x !== undefined // false: property exists but is undefined
o.y !== undefined // false: property doesn't even exist
"x" in o // true: the property exists
"y" in o // false: the property doesn't exists
delete o.x; // Delete the property x
"x" in o // false: it doesn't exist anymore

// Enumerating Properties

/*

The for/in loop was covered in §5.5.4. It runs the body of the loop once for each
enumerable property (own or inherited) of the specified object, assigning the name of
the property to the loop variable.

*/

var o = {x:1, y:2, z:3}; // Three enumerable own properties
o.propertyIsEnumerable("toString") // => false: not enumerable
for(p in o) // Loop through the properties
    console.log(p); // Prints x, y, and z, but not toString

// Property Getters and Setters

var o = {
    // An ordinary data property
    data_prop: value,
    // An accessor property defined as a pair of functions
    get accessor_prop() { /* function body here */ },
    set accessor_prop(value) { /* function body here */ }
};

// Example

var p = {
    // x and y are regular read-write data properties.
    x: 1.0,
    y: 1.0,

    // r is a read-write accessor property with getter and setter.
    // Don't forget to put a comma after accessor methods.
    get r() { return Math.sqrt(this.x*this.x + this.y*this.y); },
    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
        var ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    // theta is a read-only accessor property with getter only.
    get theta() { return Math.atan2(this.y, this.x); }
};

console.log(p.r);
console.log(p.theta);

// Propertie Attribute

/*

To obtain the property descriptor for a named property of a specified object, call
Object.getOwnPropertyDescriptor():

*/

console.log(Object.getOwnPropertyNames(p)) // return [ 'x', 'y', 'r', 'theta' ]

console.log(Object.getOwnPropertyDescriptor({x:1}, "x")); // // Returns {value: 1, writable:true, enumerable:true, configurable:true}

// Returns undefined for inherited properties and properties that don't exist.
Object.getOwnPropertyDescriptor({}, "x"); // undefined, no such prop
Object.getOwnPropertyDescriptor({}, "toString"); // undefined, inherited

/*

As its name implies, Object.getOwnPropertyDescriptor() works only for own properties.
To query the attributes of inherited properties, you must explicitly traverse the
prototype chain (see Object.getPrototypeOf() in §6.8.1).

*/

// Object Attribute

var p = {x:1}; // Define a prototype object.
var o = Object.create(p); // Create an object with that prototype.
p.isPrototypeOf(o) // => true: o inherits from p
Object.prototype.isPrototypeOf(o) // => true: p inherits from Object.prototype

// Class Atribute

function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
    }

classof(null) // => "Null"
classof(1) // => "Number"
classof("") // => "String"
classof(false) // => "Boolean"
classof({}) // => "Object"
classof([]) // => "Array"
classof(/./) // => "Regexp"
classof(new Date()) // => "Date"
classof(window) // => "Window" (a client-side host object)
function f() {}; // Define a custom constructor
classof(new f()); // => "Object"

var o = 1;

console.log(Object.prototype.toString.call(o));

// Object Methods

var o = { x: 1 }

console.log(o.hasOwnProperty("x")); // true: o has an own property x
console.log(o.hasOwnProperty("y")); // false: o doesn't have a property y
console.log(o.hasOwnProperty("toString")); // false: toString is an inherited property

console.log(o.propertyIsEnumerable("x")); // true: o has an own enumerable property x
console.log(o.propertyIsEnumerable("y")); // false: y is inherited, not own

console.log(Object.prototype.isPrototypeOf(o)); // => true: p inherits from Object.prototype

console.log(Object.getPrototypeOf(o)); // Prototyé Object

var number = 1;

console.log(Object.getPrototypeOf(number)); // Prototype Number

console.log(typeof(o)); // Object
console.log(typeof(o.x)); // Number

var s = { x:1, y:1 }.toString();
console.log(s); // Object


// Creating a Object

// new or Object.create()

// Object Literals

var empty = {}; // An object with no properties
var point = { x:0, y:0 }; // Two properties
var point2 = { x:point.x, y:point.y+1 }; // More complex values
var book = {
    "main title": "JavaScript", // Property names include spaces,
    'sub-title': "The Definitive Guide", // and hyphens, so use string literals
    "for": "all audiences", // for is a reserved word, so quote
author: { // The value of this property is
    firstname: "David", // itself an object. Note that
    surname: "Flanagan" // these property names are unquoted.
    }
};

// Creating Objects with new

var o = new Object(); // Create an empty object: same as {}.
var a = new Array(); // Create an empty array: same as [].
var d = new Date(); // Create a Date object representing the current time
var r = new RegExp("js"); // Create a RegExp object for pattern matching.

// Object Prototype

/*

Object.prototype is one of the rare objects that has no prototype: it does not inherit
any properties. Other prototype objects are normal objects that do have a prototype.
All of the built-in constructors (and most user-defined constructors) have a prototype
that inherits from Object.prototype. For example, Date.prototype inherits properties
from Object.prototype, so a Date object created by new Date() inherits properties from
both Date.prototype and Object.prototype. This linked series of prototype objects is
known as a prototype chain.

*/

// Object.create()

// Object.create() is a static function, not a method invoked on individual objects

var o1 = Object.create({x:1, y:2}); // o1 inherits properties x and y.

var o2 = Object.create(null); // o2 inherits no props or methods.

var o3 = Object.create(Object.prototype); // o3 is like {} or new Object().

/*

The ability to create a new object with an arbitrary prototype (put another way: the
ability to create an “heir” for any object) is a powerful one, and we can simulate it in
ECMAScript 3 with a function like the one

*/

// inherit() returns a newly created object that inherits properties from the
// prototype object p. It uses the ECMAScript 5 function Object.create() if
// it is defined, and otherwise falls back to an older technique.

function inherit(p) {
    if (p == null) throw TypeError(); // p must be a non-null object
    if (Object.create) // If Object.create() is defined...
        return Object.create(p); // then just use it.
    var t = typeof p; // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {}; // Define a dummy constructor function.
    f.prototype = p; // Set its prototype property to p.
    return new f(); // Use f() to create an "heir" of p.
}

// Querying and Setting Properties

var book = {
    "main title": "JavaScript", // Property names include spaces,
    'sub-title': "The Definitive Guide", // and hyphens, so use string literals
    "for": "all audiences", // for is a reserved word, so quote
        author: { // The value of this property is
            firstname: "David", // itself an object. Note that
            surname: "Flanagan" // these property names are unquoted.
            }
        };

var author = book.author; // Get the "author" property of the book.
var name = author.surname // Get the "surname" property of the author.
var title = book["main title"] // Get the "main title" property of the book.

book.edition = 6; // Create an "edition" property of book.
book["main title"] = "ECMAScript"; // Set the "main title" property.

console.log(book)
console.log(author);
console.log(author.firstname);
console.log(author.surname);

// Inheritance

/*

Suppose you query the property x in the object o. If o does not have an own property
with that name, the prototype object of o is queried for the property x. If the prototype
object does not have an own property by that name, but has a prototype itself, the query
is performed on the prototype of the prototype. This continues until the property x is
found or until an object with a null prototype is searched. As you can see, the prototype
attribute of an object creates a chain or linked list from which properties are
inherited.


*/

var o = {} // o inherits object methods from Object.prototype
o.x = 1; // and has an own property x.
var p = inherit(o); // p inherits properties from o and Object.prototype
console.log(p);
p.y = 2; // and has an own property y.
var q = inherit(p); // q inherits properties from p, o, and Object.prototype
console.log(q);
q.z = 3; // and has an own property z.
var s = q.toString(); // toString is inherited from Object.prototype
q.x + q.y // => 3: x and y are inherited from o and p

// Deleting Properties

delete book.author; // The book object now has no author property.
delete book["main title"]; // Now it doesn't have "main title", either.

// Testing Properties

/*

JavaScript objects can be thought of as sets of properties, and it is often useful to be
able to test for membership in the set—to check whether an object has a property with
a given name. You can do this with the in operator, with the hasOwnProperty() and
propertyIsEnumerable() methods, or simply by querying the property.

*/

var o = { x: 1 }
"x" in o; // true: o has an own property "x"
"y" in o; // false: o doesn't have a property "y"
"toString" in o; // true: o inherits a toString property

/*

The hasOwnProperty() method of an object tests whether that object has an own property
with the given name. It returns false for inherited properties:

*/

var o = { x: 1 }
o.hasOwnProperty("x"); // true: o has an own property x
o.hasOwnProperty("y"); // false: o doesn't have a property y
o.hasOwnProperty("toString"); // false: toString is an inherited property

/*

The propertyIsEnumerable() refines the hasOwnProperty() test. It returns true only if
the named property is an own property and its enumerable attribute is true. Certain
built-in properties are not enumerable. Properties created by normal JavaScript code
are enumerable unless you’ve used one of the ECMAScript 5 methods shown later to
make them nonenumerable.

*/

var o = inherit({ y: 2 });
o.x = 1;
o.propertyIsEnumerable("x"); // true: o has an own enumerable property x
o.propertyIsEnumerable("y"); // false: y is inherited, not own
Object.prototype.propertyIsEnumerable("toString"); // false: not enumerable

var o = { x: undefined } // Property is explicitly set to undefined
o.x !== undefined // false: property exists but is undefined
o.y !== undefined // false: property doesn't even exist
"x" in o // true: the property exists
"y" in o // false: the property doesn't exists
delete o.x; // Delete the property x
"x" in o // false: it doesn't exist anymore

// Enumerating Properties

/*

The for/in loop was covered in §5.5.4. It runs the body of the loop once for each
enumerable property (own or inherited) of the specified object, assigning the name of
the property to the loop variable.

*/

var o = {x:1, y:2, z:3}; // Three enumerable own properties
o.propertyIsEnumerable("toString") // => false: not enumerable
for(p in o) // Loop through the properties
    console.log(p); // Prints x, y, and z, but not toString

// Property Getters and Setters

var o = {
    // An ordinary data property
    data_prop: value,
    // An accessor property defined as a pair of functions
    get accessor_prop() { /* function body here */ },
    set accessor_prop(value) { /* function body here */ }
};

// Example

var p = {
    // x and y are regular read-write data properties.
    x: 1.0,
    y: 1.0,

    // r is a read-write accessor property with getter and setter.
    // Don't forget to put a comma after accessor methods.
    get r() { return Math.sqrt(this.x*this.x + this.y*this.y); },
    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
        var ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    // theta is a read-only accessor property with getter only.
    get theta() { return Math.atan2(this.y, this.x); }
};

console.log(p.r);
console.log(p.theta);

// Propertie Attribute

/*

To obtain the property descriptor for a named property of a specified object, call
Object.getOwnPropertyDescriptor():

*/

console.log(Object.getOwnPropertyNames(p)) // return [ 'x', 'y', 'r', 'theta' ]

console.log(Object.getOwnPropertyDescriptor({x:1}, "x")); // // Returns {value: 1, writable:true, enumerable:true, configurable:true}

// Returns undefined for inherited properties and properties that don't exist.
Object.getOwnPropertyDescriptor({}, "x"); // undefined, no such prop
Object.getOwnPropertyDescriptor({}, "toString"); // undefined, inherited

/*

As its name implies, Object.getOwnPropertyDescriptor() works only for own properties.
To query the attributes of inherited properties, you must explicitly traverse the
prototype chain (see Object.getPrototypeOf() in §6.8.1).

*/

// Object Attribute

var p = {x:1}; // Define a prototype object.
var o = Object.create(p); // Create an object with that prototype.
p.isPrototypeOf(o) // => true: o inherits from p
Object.prototype.isPrototypeOf(o) // => true: p inherits from Object.prototype

// Class Atribute

function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
    }

classof(null) // => "Null"
classof(1) // => "Number"
classof("") // => "String"
classof(false) // => "Boolean"
classof({}) // => "Object"
classof([]) // => "Array"
classof(/./) // => "Regexp"
classof(new Date()) // => "Date"
classof(window) // => "Window" (a client-side host object)
function f() {}; // Define a custom constructor
classof(new f()); // => "Object"

var o = 1;

console.log(Object.prototype.toString.call(o));

// Object Methods

var o = { x: 1 }

console.log(o.hasOwnProperty("x")); // true: o has an own property x
console.log(o.hasOwnProperty("y")); // false: o doesn't have a property y
console.log(o.hasOwnProperty("toString")); // false: toString is an inherited property

console.log(o.propertyIsEnumerable("x")); // true: o has an own enumerable property x
console.log(o.propertyIsEnumerable("y")); // false: y is inherited, not own

console.log(Object.prototype.isPrototypeOf(o)); // => true: p inherits from Object.prototype

console.log(Object.getPrototypeOf(o)); // Prototyé Object

var number = 1;

console.log(Object.getPrototypeOf(number)); // Prototype Number

console.log(typeof(o)); // Object
console.log(typeof(o.x)); // Number

var s = { x:1, y:1 }.toString();
console.log(s); // Object
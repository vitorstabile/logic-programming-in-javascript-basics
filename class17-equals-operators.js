/*

// When using ==, values can be considered equal even when they are of different types.

// ********** == Table **********

// Type(x)           // Type(y)          // Result

// null             // undefined         // true
// undefined        // null              // true
// Number           // String            // x == toNumber(y)
// String           // Number            // toNumber(x) == y
// Boolean          // Any               // toNumber(x) == y
// Any              // Boolean           // x == toNumber(y)
// String or Number // Object            // x == toPrimitive(y)
// Object           // String or Number  // toPrimitive(x) == y

*/

var a = 1;
var b = "1";

console.log(a == b); // true

var c = 1;
var d = "2";

console.log(c == d); // false



/*

// If x and y are of the same type, then JavaScript will use the equals method to
// compare the two values or objects. Any other combination that is not listed in
// the table gives a false result.

// The toNumber and toPrimitive methods are internal and evaluate the values
// according to the tables that follow.

// ********** toNumber Table **********

// Value Type          // Result

// undefined           // This is NaN

// null                // This is +0

// Boolean             // If the value is true, the result is 1; if the value is false, the result is +0

// Number              // This is the value of the number



// ********** toPrimitive Table **********

// Value Type          // Result

// Object               If valueOf returns a primitive value, it returns the primitive value;
                        otherwise, if toString returns a primitive value, it returns the
                        primitive value and otherwise returns an error

*/

var myName = 'Packt';

console.log('packt' == true);

// First, it converts the boolean value using toNumber, so we have packt == 1.
// Then, it converts the string value using toNumber. Since the string consists of
// alphabetical characters, it returns NaN, so we have NaN == 1, which is false.

console.log('packt' == false);

// First, it converts the boolean value using toNumber, so we have packt == 0.
// Then, it converts the string value using toNumber. Since the string consists of
// alphabetical characters, it returns NaN, so we have NaN == 0, which is false.

/*

// ********** === Table **********

// Type(x)          // Values                                    // Result

// Number           // x has the same value as y (but not NaN)   // true
// String           // x and y are identical characters          // true
// Boolean          // x and y are both true or both false       // true
// Object           // x and y reference the same object         // true

*/

console.log('packt' === true); //false
console.log('packt' === 'packt'); //true
var person1 = {name:'John'};
var person2 = {name:'John'};
console.log(person1 === person2); //false, different objects
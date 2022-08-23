// Value Type -> Result

// undefined -> false

// null -> false

// Boolean -> true is true and false is false

// Number -> The result is false for +0, -0, or NaN; otherwise, the result is true

// String -> The result is false if the string is empty (length is 0); otherwise, the result is true (length >=1)
                
// Object -> true

function testTruthy(val) {
        return val ? console.log('truthy') : console.log('falsy');
    }
    
testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (object is always true)
testTruthy(''); // false
testTruthy('Packt'); // true
testTruthy(new String('')); // true (object is always true)
testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true (object is always true)
testTruthy({}); // true (object is always true)
var obj = { name: 'John' };
testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // // false age (property does not exist)
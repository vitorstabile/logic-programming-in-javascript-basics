var a = 1;
var b = 2;
console.log(a == 4);

if (a == 4){
    b = b + 1;
    console.log(b);
}
else{
    a = a + 1;
    console.log(a);
}

// Value Type

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
    testTruthy(obj.age); // age (property does not exist)
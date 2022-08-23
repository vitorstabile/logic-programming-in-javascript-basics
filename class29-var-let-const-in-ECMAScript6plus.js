// before the ECMAScript6+

var name = 'Matheus';

console.log(name);

// after the ECMAScript6+, we can usel let and const

// let

let lastName = 'Fraga';

console.log(lastName);

let lastName = 'Igor';

console.log(lastName);

// const

const PI = 3.14;

console.log(PI);

// Difference betwen them var and let:

// With var, we can acess the local scope globally

var name = 'Matheus';

if (name == 'Matheus'){
    var age = 40;
    console.log('Have ' + age + ' years old!');
}

console.log(age); // we can access var globally

// with let, we can't acess the local scope globally

var name = 'Matheus';

if (name == 'Matheus'){
    let lastName = 'Fraga';
    console.log(name + ' ' + lastName);
}

console.log(lastName); // Error: lastName is in local scope of if condition. You can't access globally

// Another Example

// with var

var list = [1,2,3];

for (var i in list){
    console.log(i);
}

console.log(i) // with var, you can acess the i variable -> Stop in the position 2

// With let

var list = [1,2,3];

for (let i in list){
    console.log(i);
}

console.log(i) // with let, you can't access the i variable

// Another example var and let

// var -> using same name of variable

var name = 'Matheus';

console.log(name);

var name = 'Igor';

console.log(name); // we can use the same name of variable

// let -> we can't use the same name

let lastName = 'Fraga';

console.log(lastName);

let lastName = 'Igor';

console.log(lastName); // Error -> same name


// Const -> If we want a constant variable

// Example

const gravity = 9.18;

console.log(gravity);

gravity = 10.0; // Error -> You can't change a const variable
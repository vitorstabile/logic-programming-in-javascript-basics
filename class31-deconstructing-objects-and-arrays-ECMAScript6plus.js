// deconstructing objects

const person = {
    name: 'Matheus',
    lastName: 'Fraga',
    age: 10,
    job: 'Developer'
};

console.log(person);

// from a object, you can attributte variables with same value

let { name } = person;
let { lastName } = person;
let { age, job } = person;

console.log(name);
console.log(lastName);
console.log(age);
console.log(job);

// if you don't want to attribute the name of your variable the same object attribute name:

let { job:hobbie } = person;

console.log(hobbie);

// remember, you don't change the object value attributte when you change the value of your variable

console.log(name); // my variable that take the attribute name value from object person

console.log(person); // the object person

name = "Joao"; // change my variable value

console.log(name);

console.log(person); // the attribute value name from object person dont change.

// deconstructing arrays

let person = ['Matheus', 'Fraga', 10, 'Developer'];

console.log(person);

// from a array, you can attributte variables with same value with the position from array

let {0: name} = person;
let {1:lastName} = person;
let {2:age, 3:job} = person;

console.log(name);
console.log(lastName);
console.log(age);
console.log(job);

// another form

let { 0:firstName, 1:nickName, 2:old, 3:hobbie } = person;

console.log(firstName);
console.log(nickName);
console.log(old);
console.log(hobbie);

// deconstructing arrays - another form

let person = ['Matheus', 'Fraga', 10, 'Developer'];

let = [ name, lastName, age, job ] = person;

console.log(name);
console.log(lastName);
console.log(age);
console.log(job);

// another form

let [ firstName, nickName, old, hobbie ] = person;

console.log(firstName);
console.log(nickName);
console.log(old);
console.log(hobbie);
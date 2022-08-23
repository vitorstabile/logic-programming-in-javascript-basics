// before the ECMAScript6+

// to make a concatenation with variables, you have to make this:

let name = "Matheus";

let lastName = "Fraga";

let age = "45";

let person = "My name is: " + name + " " + lastName + " and I have " + age + " years old." 

console.log(person);

// after the ECMAScript6+, we can dont need to make concatenation and use separators ""

let person2 = `My name is: ${name} ${lastName} and I have ${age} years old.`;

console.log(person2);
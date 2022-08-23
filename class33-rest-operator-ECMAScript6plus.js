function myList (names){

    console.log(names);

}

myList("Matheus", "Lucas", "Joao");

// the output: Matheus

// Why?

// Because the funciton don't know how many names or values you will pass in the function

// for this, you have to use the rest operator. He is the same as spread operator

function myList (...names){

    console.log(names);

}

myList("Matheus", "Lucas", "Joao");

// the output: [ 'Matheus', 'Lucas', 'Joao' ]

// another example

function personRegistration (users, ...newUsers) {

    let totalUsers = [
        ...users, // use spread operator
        ...newUsers // use spread operator

    ];

    return console.log(totalUsers);

};

let users = ["Matheus", "Joao"];

let newUsers = personRegistration(users, "Henrique", "Lucas");

// output: [ 'Matheus', 'Joao', 'Henrique', 'Lucas' ]
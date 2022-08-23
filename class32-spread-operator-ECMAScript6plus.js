let numbers1 = [1,2,3];

// We want to join the the array number1, in another array.
// For this, we will use the spread operator.

let numbers2 = [...numbers1,4,5,6];

console.log(numbers2); // output: [ 1, 2, 3, 4, 5, 6 ]

// if you don't use spread operator

let numbers3 = [numbers1,4,5,6];

console.log(numbers3); // output: [ [ 1, 2, 3 ], 4, 5, 6 ] - He make a array inside another array

// Is used with objects

let person = {
    name: 'Matheus',
    lastName: 'Fraga',
    age: 10,
    job: 'Developer'
}

let newPerson = {
    ...person,
    genre: 'Male',
    hobbie: 'gamer'
};

console.log(newPerson); // { name: 'Matheus', lastName: 'Fraga', age: 10,
                        // job: 'Developer', genre: 'Male', hobbie: 'gamer' }

// if you don't use spread operator

let newPerson2 = {
    person,
    genre: 'Male',
    hobbie: 'gamer'
};

console.log(newPerson2); // person: { name: 'Matheus', lastName: 'Fraga', age: 10, job: 'Developer' },
                         //  genre: 'Male',
                         //  hobbie: 'gamer'

// another example

function personRegistration (info) {
    
    let newData = {
        ...info,
        job: 'Developer',
        status: 1,
        cod: 12345
    };

    return newData;

};

console.log(personRegistration({name:'Matheus', lastName: 'Fraga', begin:'2045'}));

//output

/*

{
  name: 'Matheus',
  lastName: 'Fraga',
  begin: '2045',
  job: 'Developer',
  status: 1,
  cod: 12345
}
*/
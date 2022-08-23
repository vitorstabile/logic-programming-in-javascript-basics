// Map operation

const list = [1,2,3,4,5,6];

const newList = list.map(function(item){
    return item * 5;
});

console.log(newList);

// output: [ 5, 10, 15, 20, 25, 30 ]

// Map operation with index

const list2 = [1,2,3,4,5,6];

const newList2 = list2.map(function(item, index){
    return item + index;
});

console.log(newList2);

// output: [ 1, 3, 5, 7, 9, 11 ]

// Reduce Operation

const list3 = [1,2,3,4,5,6];

const sum = list3.reduce(function(total, nextItem){
    return total + nextItem;
});

console.log(sum);

// output: 21 (0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10, 10 + 5 = 15, 15 + 6 = 21)

// Find Operation

const list4 = [1,2,3,4,5,6];

const find = list4.find(function(item){

    return item === 6;

});

console.log(find);

// output: 6

const list5 = [1,2,3,4,5,6];

const find = list5.find(function(item){

    return item === 10;

});

console.log(find);

// output: undefined

// FindIndex Operation

const list5 = [1,2,3,4,5,6];

const find = list5.findIndex(function(item){

    return item === 6;

});

console.log(find);

// output: 5

const list6 = [1,2,3,4,5,6];

const find = list6.findIndex(function(item){

    return item === 10;

});

console.log(find);

// output: -1 (false)

// Filter Operation

const list7 = [1,2,3,4,5,6];

const newList = list7.filter(i => i%2 == 0);

console.log(newList); //output: [ 2, 4, 6 ]

// Fill

let list8 = [1,2,3,4,5,6];

let newList1 = list8.fill(7);

let list9 = [1,2,3,4,5,6];

let newList1 = list9.fill(7,2,3); // value that fill, initial index, final index

console.log(newList1); //[ 1, 2, 7, 4, 5, 6 ]

// copyWithin

let list10 = [1,2,3,4,5];

let newList = list10.copyWithin(0,3,4); // value that will be the copie, value start will copy
                                        // and value will finish the copy
console.log(newList); // [ 4, 2, 3, 4, 5 ]

// some

let list11 = [1,2,3,4,5];

console.log(list11.some(elem => elem < 3)); // True -> is a element minor than 3 (1, 2 and 3)

console.log(list11.some(elem => elem < 2)); // True -> is a element minor than 2 (1)

// every

let list11 = [1,2,3,4,5];

console.log(list11.every(elem => elem < 10)); // True -> all elements is minor than 10

console.log(list11.every(elem => elem < 5)); // False -> 5 is not minor than 5

// includes -> if is what you want in your array

let names = ['Matheus', 'Lucas', 'Joao'];

console.log(names.includes('Lucas')); // output - true

// endsWith

let name = 'Matheus';

console.log(name.endsWith('eus')); // output: true -> Matheus ends with eus

// startsWith

let name = 'Matheus';

console.log(name.startsWith('Mat')); // output: true -> Matheus start with Mat

console.log(name.startsWith('mat')); // output: false -> Matheus start with Mat not mat
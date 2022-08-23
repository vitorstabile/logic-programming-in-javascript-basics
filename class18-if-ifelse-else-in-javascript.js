/*

if (expression) {
    statement
}

*/

// if 

var num = 1;
if (num === 1) {
    console.log('num is equal to 1'); // num is equal to 1
}

// else

/*

if (expression) {
    statement1
}
else{
    statement2
}

*/

var num = 0;
if (num === 1) {
    console.log('num is equal to 1');
} else {
    console.log('num is not equal to 1, the value of num is ' + num); // num is not equal to 1, the value of num is 0
}

// if- if else and else

/*

if (n == 1) {
    // Execute code block #1
}
else if (n == 2) {
    // Execute code block #2
}
else if (n == 3) {
    // Execute code block #3
}
else {
    // If all else fails, execute block #4
}

*/

var month = 5;
if (month === 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February');
} else if (month === 3) {
    console.log('March');
} else {
    console.log('Month is not January, February or March'); // Month is not January, February or March
}

var month = 3;
if (month === 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February');
} else if (month === 3) {
    console.log('March'); // March
} else {
    console.log('Month is not January, February or March');
}

// ternary operator options

var num = 1;

if (num === 1) {
    num--;
    console.log(num);
}
else{
    num++;
    console.log(num);
}

// ternary operator options

var num = 1;

(num === 1) ? num-- : num++;

console.log(num);
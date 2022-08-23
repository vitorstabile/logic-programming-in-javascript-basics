// switch

/*

switch(expression) {
    statements
}

*/

var n = 0;

switch(n) {
    case 1: // Start here if n == 1
    // Execute code block #1.
    break;
    // Stop here
    case 2: // Start here if n == 2
    // Execute code block #2.
    break; // Stop here
    case 3: // Start here if n == 3
    // Execute code block #3.
    break; // Stop here
    default: // If all else fails...
    // Execute code block #4.
    break; // stop here
}

var month = 5;
switch (month) {

case 1:
    console.log('January');
    break;

case 2:
    console.log('February');
    break;

case 3:
    console.log('March');
    break;

default:
    console.log('Month is not January, February or March'); // Month is not January, February or March
}
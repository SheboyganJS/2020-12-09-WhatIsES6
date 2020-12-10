/*
    Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) 
    or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) 
    are expected.
*/

//Hmmm what about this?

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(...arr1, ...arr2) );


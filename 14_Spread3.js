/*
    Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) 
    or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) 
    are expected.
*/


//A lot of the time I do things like this with this tool

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
let combinedArray = [...arr1, 9000, ...arr2, 20];

console.log(combinedArray);

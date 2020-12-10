/*
    Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) 
    or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) 
    are expected.
*/

//Let's us a function like Math.max which allows N arguments

console.log(Math.max(3, 5, 1)); //Outputs 5

let arr = [3, 15, 1];

console.log( Math.max(arr) ); // NaN

//Well how can we use this Spread operator to our advantage?

console.log( Math.max(...arr) ); // 5


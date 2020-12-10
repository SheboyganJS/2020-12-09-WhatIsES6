/*
    Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) 
    or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) 
    are expected.
*/

//Quick copy an array or object

let object = {
    Name: "Mark",
    Age: 34
};

let heros = ["Goku", "Vegeta"];

let clonedObject = { ...object };
let villians = [ ...heros ];

clonedObject.Name = "Adam";
villians[0] = "Frieza"

console.log(object);
console.log(clonedObject);

console.log(heros);
console.log(villians);
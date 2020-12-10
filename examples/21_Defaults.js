/*
    Default Parameter Values
    Simple and intuitive default values for function parameters
*/

//The old way
function f (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};
console.log(f(1));

//The NEW way!
function f (x, y = 7, z = 42) {
    return x + y + z
}

console.log(f(1));
console.log(f(1, 8, null));


  
/*
    The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
*/

function sum(a, b, ...otherNumbers) {
    return a + b;
}
  
console.log( sum(1, 2, 3, 4, 5) ); //Outputs 3 but does not error

/*
    Wouldn't it be nice if we could make a function like this?
*/
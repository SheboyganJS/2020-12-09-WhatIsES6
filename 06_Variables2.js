/*
    OK, now that we know scope let's see let in action...HAHA
*/

var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
console.log(i); //This will output 10 because of scope of the variable

//However
let j = 5;
for (let j = 0; j < 10; j++) {
  // some statements
}
console.log(j);// Here j is 5


/*
    Variables declared with var and let are quite similar when declared inside a function
*/
function myFunction1() {
    var modelName = "GMC";   // Function Scope
}
try {
    console.log(modelName);
} catch (e) {
    console.log("Cannot access modelName");
}

function myFunction2() {
    let carName = "Sierra";   // Function Scope
}
try {
    console.log(carName);
} catch (e) {
    console.log("Cannot access carName");
}

/*
    Redeclaring a JavaScript variable with var is allowed anywhere in a program
    We can NOT do this with var or const
*/
var x = 2;

// Now x is 2
 
x = 3;

x = "2";

x = {
    firstName: "Mark"
};

// Now x is 3

/*
    Lastly Const cannot be reassigned
*/
const constant = "My Constant";

try {
    constant = "New Constant";
} catch (e) {
    console.log("Cannot change a constant");
}
/*
    Arrow Syntax Sugar
*/

//Normal Fn
let hello = function(val) {
    return "Hello" + val;
}

//Arrow Fn
hello = () => "Hello World!";


//Even cleaner Arrow Fn
hello = () => "Hello World!";

//Clean and with variables
hello = (val) => "Hello " + val;

/*
    What about this?
*/

// hello = function() {
//     console.log("This in Regular Fn");
//     console.log(this);
// }
// hello(); //Notice how this is an object with global and other functions available

hello = () => {
    console.log("This in Arrow Fn");
    console.log(this);
}
hello(); //Notice how in node it is just an empty object
  
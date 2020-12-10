/*
    The counter should be local to the add() function, to prevent other code from changing it:
*/

// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  var counter = 0;
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

//The counter should now be 3. But it is 0
console.log(counter);

/*
    It did not work because we display the global counter instead of the local counter.
*/
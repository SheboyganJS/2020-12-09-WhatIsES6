/*
    Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.

    You could use a global variable, and a function to increase the counter:
*/

// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3
console.log(counter);

/*
    There is a problem with the solution above: Any code on the page can change the counter, without calling add().
*/
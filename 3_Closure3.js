/*
    A JavaScript inner function can solve this.

    All functions have access to the global scope.  

    In fact, in JavaScript, all functions have access to the scope "above" them.

    JavaScript supports nested functions. Nested functions have access to the scope "above" them.

    In this example, the inner function plus() has access to the counter variable in the parent function:
*/

function add() {
  var counter = 0;
  function plus() {counter += 1;}
  plus();   
  return counter;
}

add();
add();

//The counter should now be 3. But it is 1
console.log(add());

/*
    Wait that did not work either, need to find a way to execute counter = 0 only once.

    We need Closure!
*/
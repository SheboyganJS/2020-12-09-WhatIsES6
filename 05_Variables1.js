/*
    Let's Discuss Scope Quick
*/

/*****Global*****/
var modelName = "GMC";

// code here can use modelName

function myFunction() {
    // code here can also use modelName
}

// code here can use modelName


/*****Function*****/
// code here can NOT use carName

function myFunction() {
    var carName = "Sierra";
    // code here CAN use carName
}
  
// code here can NOT use carName


  
/*****New Block Scope*****/
{
    var x = 2;
}
// x CAN be used here

{
    let y = 2;
}
// y can NOT be used here
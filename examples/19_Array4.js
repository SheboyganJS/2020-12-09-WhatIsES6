/*
    Instead of using a for loop and doing all the work yourself we now have special functions :)
*/


//FIND
let ages = [3, 10, 18, 20, 21, 22, 24];

function checkAdult(age, index) {
  if (index > 5){
    return age >= 18;
  }
}

console.log(ages.find(checkAdult));
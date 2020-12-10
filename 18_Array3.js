/*
    Instead of using a for loop and doing all the work yourself we now have special functions :)
*/



//EVERY & SUM
const isBelowThreshold = (currentValue) => currentValue < 40;
const even = (element) => element % 2 === 0;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
console.log(array1.some(even));

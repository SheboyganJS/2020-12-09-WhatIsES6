/*
    Another new Data Type Come on now Javascript you have outdone yourself!
*/

/*
  Iterating over a set
*/

set = new Set(["oranges", "apples", "bananas", "apples"]);

for (let value of set) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});

var array = [ ...set ];

console.log(array);
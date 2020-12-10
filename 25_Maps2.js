/*
    A new Data Type Come on now Javascript you have outdone yourself!
*/

/*
  We can even use an object as a key
*/

let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log( visitsCountMap.get(john) ); // 123

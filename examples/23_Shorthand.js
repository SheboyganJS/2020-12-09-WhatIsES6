/*
    If you want to define an object who's keys have the same name as the variables passed-in as properties,
    you can use the shorthand and simply pass the key name.
*/

var cat = 'Miaow';
var dog = 'Woof';
var bird = 'Peet peet';

//The old way
var someObject = {
  cat: cat,
  dog: dog,
  bird: bird
}
  
//The new way
var someOtherObject = {
    cat,
    dog,
    bird
}

console.log(someObject);
console.log(someOtherObject);
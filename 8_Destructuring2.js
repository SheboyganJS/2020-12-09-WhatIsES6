//The new way

var hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
};
  
const { name: otherName, realName } = hero;
  
console.log(otherName);     // => 'Batman',
console.log(realName); // => 'Bruce Wayne'
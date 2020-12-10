/*
    Template literals are string literals allowing embedded expressions. 
    You can use multi-line strings and string interpolation features with them.
*/

let object = {
    firstName: "Mark",
    lastName: "Medinger",
    jobTitle: "Jedi"
}

//The old old way
let sentance = object.firstName + " \n " + object.lastName + " is a " + object.jobTitle + ".";
console.log(sentance)

//The old way JS never had

//sentance = String.Format("${0} ${1} is a ${2}. He is ${3}", object.firstName, object.lastName, object.jobTitle);
var x = null;

//The NEW way!
sentance = `${object.firstName} ${object.lastName} is a ${object.jobTitle}.`;
console.log(sentance);
  
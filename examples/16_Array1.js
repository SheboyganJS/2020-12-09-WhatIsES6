/*
    Instead of using a for loop and doing all the work yourself we now have special functions :)
*/

//MAP
let persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];
  
  
function getFullName(item) {
    let fullname = [item.firstname,item.lastname].join(" ");
    return {
        fullname: fullname,
        ...item
    };
}

console.log(persons.map(getFullName));
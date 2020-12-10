/*
    Instead of using a for loop and doing all the work yourself we now have special functions :)
*/


//FILTER
let customers = [
    {firstname : "Malcom", lastname: "Reynolds", tenure: 10},
    {firstname : "Kaylee", lastname: "Frye", tenure: 15},
    {firstname : "Jayne", lastname: "Cobb", tenure: 3}
];

console.log(customers.filter((customer) => customer.tenure >= 10));

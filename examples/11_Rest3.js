/*
    The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
*/

/*
    Some other cool stuff you can do with it
*/

function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    console.log( titles[0] ); // Consul
    console.log( titles[1] ); // Imperator
    console.log( titles.length ); // 2
}
  
showName("Julius", "Caesar", "Consul", "Imperator");
// local, global, block 
let x;      // undefined 

x = 10;     // memory initialized, number

// let x = 15; // Error
console.log(x); // 10
{
    // block/local
    let x = 20;
    console.log(x);
}
console.log(x);     // 10, 20

var y

y = 20


const config = {};
// const object, array 
config.name = "Sandesh";


// Data types 
/**
 * a. String 
 *      "", '', ``
 * b. Number 
 *      integer, float 
 * c. Null 
 *      null 
 * d. Boolean 
 *      true, false 
 * e. Array 
 *      is collection of data seprated by comma 
 *      elemnts are arranged in index value pair 
 *      indexes are defined default and starts from 0
 *      array always created by using [] or new Array()
 * f. Object / JSON (JavaScript Object Notation)
 *      instance of a class
 *      prototype, Class based 
 *      {}
 * g. Undefined 
 *      - Dynamic coupled/typed language 
 * h. NaN 
 *      - Not a number
 */

x = "string";

// let varname:datatype = "data"
// varname = datatype1  // error 

const students = [
    "Sandesh Bhattarai", "Aparna", "Bipin"
]
const stds = new Array("Sandesh Bhattarai", "Aparna", "Bipin")

// let employeeName = "Sandesh Bhattarai"
// let employeeAddress = "Kathmandu"
// let phone = 1231231231231
let employee1 = [
    ["Sandesh","Bhattarai"], 
    "Kathmandu",
    1231231231
]
console.log(employee1[0][0])
console.log(employee1[1])   // Kathmandu
let emp1 = {
    name: "Sandesh Bhattarai",
    address: "Kathmandu",
    phone: 1231231231
}

console.log(emp1.name);
let employee2 = ["Sandesh Bhattarai",  1231231231, "Kathmandu"]
console.log(employee2[1])   // 1231231231
let emp2 =  {
    name: "Sandesh Bhattarai",
    phone: 1231231231,
    address: "Kathmandu"
}
console.log(emp2.name);


let allStds = [
    {
        name: "First Student"
    },
    {
        name: "Second Student"
    },
    {
        name: "Third Student"
    }
]
// first std 
allStds[0].name     // First Student
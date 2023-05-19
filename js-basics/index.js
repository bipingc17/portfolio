// document.write("Hello from Js")

/* 

document.getElementById("first").innerHTML = "New Line" 

*/

console.log("Hello world!!")
// Variable and constants
// var , let 
var name;
name = "Sandesh Bhattarai";
console.log(name)   // Sandesh Bhattarai
var name = "User name";
console.log(name);  // User name

let email = "sandesh@broadwayinfosys.com";
console.log(email); // 
email = "testuser@gmail.com"
console.log(email); // 

// Constants 
const GRAVITY = 9.8
// GRAVITY = 10
// const GRAVITY =11

// Scope 
// local / global / block - functional

// var global 
// let block 

let a = 10;                     // 1234 => 10
console.log(a);     // 10       // 1234
{                               // block
    // block socpe
    let a = 20;                 // 4321 => 20
    console.log(a); // 20       // 4321 => 20
}                               // block end, 4321 destroy
console.log(a);     // 20       // 1234 => 10
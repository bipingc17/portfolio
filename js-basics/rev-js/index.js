// document.write();
console.log("Hello world");
// comments
/** 
 * Variable and Constants
 * changing value , fixed non changing 
 * 
 * scope 
 *  block, global, functional
 * 
 * Data type 
 * 
*/

var name = "User name" 
let email =  "email@text"

var name = "Data user"
email = "updated@test"

var a = 10;
console.log(a); // 10
{
    // block scope
    var a = 20;
    console.log(a); // 20
}
console.log(a); // 20

const GRAVITY = 9.8
const PI = 3.14

// project 
// config, db 
const DB_URL = "mongodb://127.0.0.1:27017";


//Data types 
/**
 * String / Text
 *  "", '', ``
 * Number 
 *  float, int
 * Boolean 
 *  true, false
 * Null 
 *  null, ""
 * 
 * Array
 * Object / JSON 
 *  universal Data format => JSON
 * undefined
 * NaN
 * 
 */

let i = `10`;   // string

let boolTrue = true;    // boolean, 1

let str = "";       // null => empty string 
let nulldata = null;
    // index always starts from 0
let arr = [
    "", "", 
]

let user = [
    "Sandesh",
    "email@address.com"
]
let userObj = {
    name: "Sandesh",
    email: "email@address.com"
}

let user_1 = [
    "email@address.com",
    "Sandesh"
]
let user1Obj = {
    email: "email@address.com",
    name: "Sandesh"
}

userObj.name;       // Sandesh
user1Obj.name;      // Sandesh

user[0]         // Sandesh
user_1[0]       // email@address.com

let c;      // undefined

// NaN => not a number 
// 
// Operators 
/**
 * a. Arithematic Operators 
 *      +, -, *, /, %
 * b. Increment Or Decrement Operators 
 *      ++, --
 * c. Assignment Operator 
 *      =, +=, -=, *=, /=, %=
 * d. Comparision Operator 
 *      <, >, <=, >=, ==, !=, === (boolean)
 * e. Concatination or string operator
 *      +, ,(comma)
 * f. Logical Opertor 
 *      &&, ||, !
 * g. Conditional or ternary 
 *      (exp) ? true : false;
 * 
 *      ?? (null colleacing)
 * h. Spread and Rest 
 *      ..., {...}
 */
let a = 1;              // 1
a++;    // a = a + 1    // 2
++a;    // a = a + 1;   // 3
console.log(a++)    //  3, a => 4, post assign 
// a = 4
console.log(++a)   // a => 5, 5 => pre assign
a = a + 1

a += 1;

a = 10;
let b = '10';

console.log(a == b)     // true, value comparision
console.log(a === b)    // false, value+data type compare

// Control Statment 

console.log("Hello", " ", "world")
let name = "Sandesh";
let last = "Bhattarai";
name += " " + last;

let x = 10;
let y = '10'

console.log(x + y)    // 1010
console.log(x - y)

console.log(name);  // Sandesh Bhattarai

((x > y) && (a <= b))
    // both the condition meets => return true 
    ((x > y) || (a <= b))
// if only  one condition is true => returns true 
!((x > y) || (a <= b))    // => !false => true, !true => false

let data = {
    loading: true
};

// let loading = data.loading ? data.loading : false;
let loading = data.loading ?? false;


// screen1  => loading true  
// screen2  => false

(data.loading)
    ? (true)
    : (false);


// object, array 

let user = {
    name: "User name",
    email: "user@email.com",
    address: "Kathmandu"
}

let admin = {
    ...user,            // spread operator 
    role: "admin",
    position: "Client Resource",
    organization: "Broadway Infosys"
}

// let organization = admin.organization
// let role = admin.role 
// let address = admin.address
// let other = {
//     name: admin.name, 
//     position: admin.position,
//     email: admin.email
// }
// Object destructuring
let { organization, role: userRole, address, ...other } = admin;    // rest Ope 
// orgnization
console.log(userRole)   // Broadway Infosy

let brands = ["apple", 'samsung']
let moreBrands = ["goldstar", 'Puma']

// let allbrands = ["apple",'samsung', "goldstar",'Puma']
let allbrands = [
    ...brands,
    ...moreBrands
]




function functionname({ a, b, c, ...x }) {
    // a
}

functionname({ a: 10, b: 20, c: 30, d: 20 })

// control statements
// if-else 
// truthy value
// 
// falsy Value
// false, null, 0, empty Variables, undefined, NaN
let exp;    // undefined
if (exp) {
    // if block body 
    // variable 
    // if() {

    // } else {

    // }
} else {
    // else block body
    // if() {

    // } else {

    // }
}

// percentage division 
let obtMarks = 420
let totalScore = 500

let percentage = obtMarks / totalScore * 100
// 
if (percentage >= 80) {
    console.log("First division with Distinction")
} else {
    // <80 
    if (percentage >= 60) {
        console.log("First Division")
    } else {
        // <60
        if (percentage >= 45) {
            console.log("Second Division")
        } else {
            // < 45
            if (percentage >= 32) {
                console.log("Third Division")
            } else {
                // < 32
                console.log("Sorry! You are failed")
            }
        }
    }
}

// else if 

if(percentage >= 80) {
    console.log("First With Distinction")
} else if(percentage >= 60){
    console.log("First Division")
} else if(percentage >= 45){
    console.log("Second Division")
} else if(percentage >= 32){
    console.log("Third Division")
} else if(percentage < 32) {
    console.log("Sorry! You are failed")
}


let action = "add";     // CRUD=> add, read, update, delete

if(action === 'add' || action === 'create') {
    // add Operation
} else if(action === 'read') {
    // perform read operation
} else if(action === 'update' || action === 'edit') {
    // update operation 
} else if(action ==='delete'){
    // delete operation
} 
// else {

// }

action = "edit";
// switch case 
switch(action){
    case "create":
    case "add":
        // add operation 
        console.log("Create Operation")
        break;  // end of switch
    case "read":
        // read operation 
        break;
    case "edit":
    case "update":
        // update operatorion
        break;
    case "delete":
        // delete operation
        break;
    default: 
        // break optional
        break;
}

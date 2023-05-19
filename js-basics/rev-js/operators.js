/**
 * a. Arithematic Operators 
 *      +, -, *, /, %
 * b. Increment Or Decrement Operators
 *  +=, --
 * c. Assignment Operators 
 *  =, +=, -=, *=, /=, %=
 * d. String or Concatination Operators
 *      +, ,
 * e. Comparision Operator 
 *  <, >, <=, >=, ==, !=, ===, !==
 * f. Logical Operator 
 *  &&, ||, !
 * g. Ternary or conditional Operator
 *  (exp) ? true block : false block  
 *  Null colleaching
 *      var1 = var ?? default
 * h. Spread and Rest 
 *      ...
 */
let a = 10;
let b = 3;

let c = a / b;  // 10/3 => 3.33
let d = a % b;  // 1

a = a + 1;  // a previous value + 1  => assign to a

a++;        // 12
++a;        // 13

// a = 13
console.log(a++)    // 13, a => 14, post assign
console.log(++a)    // 15, a => 15, pre assign
// 15

a = a + 4       // 19
a++             // 20
++a             // 21
a += 5          // 26
console.log(a); 

console.log("Hello ", a)


let x = 10;
let y = "10"

console.log(x == y)     // value only
console.log(x === y)    // value with data type

console.log('')
console.log(!((a < b) && (x<= y))) // all the expression should be true
console.log((a < b) || (x<= y)) // atleast one of the expression should be true

let age = 10;

let ageGroup = (age <= 16) ? "Child" : "Adult";


// let age1 = age ? age : null;
let age1 = age ?? null;

if(age <= 16) {
    ageGroup = "Child"
} else {
    ageGroup = "Adult"
}

let user = {
    name: "User name",
    email: "User@EMAIL.COM"
}

let admin = {
    ...user,
    role: "admin",
    address: "Kathmandu"
}


// let name = admin.name;
// let email = admin.email;

// object destructuring
let {name, email, ...rest} = admin;
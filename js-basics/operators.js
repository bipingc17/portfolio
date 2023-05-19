/**
 * a. Arithematic Operators 
 *      +, -, *, / ,%
 * b. Increment or Decrement Operators 
 *      ++, --
 * c. Assignment Operators 
 *      =, +=, -=, *=, /=, %=
 * d. String/Concatination operator
 *      +,  ,
 * e. Comparision ( boolean)
 *      <, >, <=, >=, ==, !=, ===, !==
 * f. Logical Operator 
 *      &&, ||, !
 * g. Conditional Operator / Ternary Operator 
 *      (expression)  ? true condition : false confitiion 
 * 
 *      true ?? default
 * h. Spread
 *      ...
 * i. Rest operator
 *      {...}
 */
let a = 10;
let b = 20;

let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;        // 10/20 => 0.5
let mod = a % b;        // 10%20 => 10

console.log(add, sub, mul, div, mod)

// a = 10
a++;        // a = a + 1
console.log(a); // 11

++a;        // a = a + 1
console.log(a); // 12

// a = 12

console.log(a++);   // 12
console.log(a);     // 13
console.log(++a);   // 14

// a = 14

a++ // 15
++a // 16

a = a + 1 // 17


a = a + 3   // 20

a += 3;     // 23


console.log("Hello"+"world")
console.log("Hello","world")

let x = 10;
let y = '10';

let z = x + y;  // 1010
console.log(z); 
let c = x - y;  // 
console.log(c)

console.log("")

console.log(x == y)   // value only , true
console.log(x === y)  // value and data type, false


console.log(x != y);    // false
console.log( x !== y ); // true 
// cart => 
let cart = [
    {
        product: "Paani",
        qty: 2
    },
    {
        product: "fanta",
        qty: 1    
    },
]

let newItem = {
    product: "Paani",
    qty: 1
}

// newItem => cart exists
// serach => product exits => 
let index = null;
// search => index exists 
index = 0

// add qty update
//(index === null) // null ==0
    // product add 
// qty increate

// API 
let boolTrue = true;
// api 
// 


boolTrue =  'true';

!(boolTrue === true && boolTrue === 'true')  // !(false) => true 
// false || true   => any one of the expression is true => true 
// false && true => if any one of the express is false => false


let payload = {
    discount: 10,
    price: 1000    
}

let discountValue = (payload.discount > 0) ? payload.price * payload.discount/100 : 0;

// let discount = payload.discount ? payload.discount : 0;
let discount = payload.discount ?? 0;

let user = {
    name: "Sandesh Bhattarai",
    email: "sandesh@broadwayinfosys.com"
}


let admin = {
    ...user,
    role: "trainer",
    language: ["MERN", "php"]
}

console.log(admin)

// let name = admin.name;
// let role = admin.role;

// object destructuring
let {name, role, ...other} = admin

// let other = {
//     language: admin.language,
//     email: admin.email
// }

// input  => e.target, name, type, value, 
// name, value 
// let e;
// let {name, value} = e.target

let data = {
    name: "",
    email: ''
}
// data, methods

function User(_nameData){
    this.name = _nameData;
}

User.prototype.setName = function (_name) {
    this.name = _name;
}

User.prototype.getName = function () {
    console.log("I am here", this)
    return this.name;
}

let userObje = new User("Test User");
let userObj1 = new User("Second user");

// userObje, userObj1 => {name: ""}
console.log(userObje)   // {name: "Test User"}
console.log(userObj1)   // {name: "Second user"}

userObj1.setName("I am new User");
userObje.setName("Sandesh Bhattarai")

console.log(userObje.getName());
console.log(userObj1.getName());


// Create a functional Constructor called Calculator 
// accept two properties from the funciton 
// add Sum, Sub, Mul, Divide functions using prototype to that class
// calculate the sum, sub, mul, div values from the class
function Calculator(x,y) {
    this.a = x;
    this.b = y;
}

Calculator.prototype.sum = function(){
    return this.a + this.b;
}
Calculator.prototype.sub = function(){
    return this.a - this.b;
}
Calculator.prototype.mul = function(){
    return this.a * this.b;
}
Calculator.prototype.div = function(){
    return this.a / this.b;
}

const calObj = new Calculator(10,20);
console.log(calObj.sum())
console.log(calObj.sub())
console.log(calObj.mul())
console.log(calObj.div())


// Create a Function called Product which takes, name, price and discount as a params
// Assign this values to the prototype
// Create a function discountAmount and afterDiscountPrice 
// calculate the values from the Product prototype 
// display the values of the object

function Product(name, price, discount) {
    this.name = name
    this.price = price 
    this.discount = discount
}

Product.prototype.discountAmount = function() {
    this.disAmt = this.price * this.discount/100; 
}
Product.prototype.afterDiscount = function() {
    this.afterDisAmt = this.price - this.disAmt;
}

let prodObje = new Product("Test Prod", 1000, 10);  // 900, 100
prodObje.discountAmount();
prodObje.afterDiscount();   // 
console.log("")
console.log(prodObje)
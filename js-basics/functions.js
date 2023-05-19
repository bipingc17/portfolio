// declaration, definition, call

function addNumber (a, b = 0) {
    let c = a + b;
    return c;
}
let res = addNumber(10)

console.log(res);   // 10






function increase(numb, inc){
    return numb+inc;
}

// let inc = increase(res, 10);
// console.log(inc);   // 40

console.log(increase(addNumber(10, 20), 10))


const addNumber1 = function(a, b) {
    return a + b
}

console.log(addNumber1(10,20))

const addNumber2 = (a, b) => {
    return a + b;
}
console.log(addNumber2(10,20))


const helpers = {
    addNumbers: (a, b) => {
        return a +b;
    }
}

console.log(helpers.addNumbers(10, 20))


// 100 cahrs random string in js 
// function generateRandomString(len=100){
const generateRandomString = (len =100) =>{
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_+)({}[]";
    let length = chars.length;
    let random = "";
    for(let i = 1; i <=len; i++){
        let posn = Math.floor(Math.random() * (length-1));
        random += chars[posn] // char
    }
    return random
}

// 10 digit
// => 1 posn => (78!)^10
// 
console.log(generateRandomString(10))




// Write a function that takes an array of numbers as input and returns the largest number in the array.
let max = getMaxNumb([1,2,3,4,5,6]) // 
console.log(max) //     6

// Write a function that takes an array of numbers as input and returns a new array with only the even numbers.
let result = getEvenOnly([1,2,3,4,5,6]) // 
console.log(result) // [2,4, 6]

// Write a function that takes a string as input and 
// returns an object representing the frequency of each character in the string. 
// For example, given the string "hello world", 
// the function should return {h: 1, e: 1, l: 3, o: 2, " ": 1, w: 1, r: 1, d: 1}.
let str = "PROGRAMMING";

for(let i = 0; i < str.length; i++){
    let char = "";
    for(let j = 0; j <= i; j++){
        char += str[j]+"    ";
    }
    console.log(char);
}

// scope
function addNumber(a, b) {
    // body
    let c = a + b; 
    return c;
    // non execute
}

let a = 10;
let b = 20;
let result = addNumber(a, b);
console.log(result) // 30
// sum 

let x = 30;
let y = 40;
let z = addNumber(x, y);
console.log(z);     // 70
// sum 
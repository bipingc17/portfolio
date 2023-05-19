let i = 1;      // i = 1

// console.log(i); // 1
// i++
// //++i
// //i += 1

// console.log(i);
// i++

// console.log(i);
// i++

// console.log(i);
// i++

// console.log(i);
// i++



console.log(i++)  // 1
// i++;            // i = 2

console.log(i++)  // 2
// i++;            // i = 3

console.log(i++) // 3
// i++             // i = 4

/***
 * do-while
 * while 
 * for 
 * 
 * for-in 
 * for-of 
 * 
 * .map()
 * .filter()
 * .reduce()
 * .forEach()
 */

// initialization 
i = 2;

do {
    // console.log(i)   // 100
    // i = i + 2    // 102

    if(i % 2 === 0) {
        // console.log(i)
    }
    i++;
} while(i <= 100);

// table html => even odd
// i = i+2,

i = 11;
do {
    // console.log(i)   // 11
    i++;            // 12
} while(i<=10);     // 12 <= 10


i = 1;
while(i <= 10) {
    // console.log(i);
    i++;
}


for(i=1; i <= 100; i++){
    if(i %2 === 0){
        // console.log(i)
    }
}

// for(i=1; i <= 100; i++){
//     if(i %2 === 0){
//         console.log(i)
//     }
// }

/**
 * 
 * 1
 * 1    2
 * 1    2    3
 * 1    2    3    4
 * 1    2    3    4    5
 * 
 * 
 * 1    2   3   4   5
 * 1    2   3   4
 * 1    2   3
 * 1    2
 * 1
 */
console.log("")
console.log("")
console.log("")

for(let a = 1; a <= 5; a++){
    let html = "";
    for(let b = 1; b <= a; b++){
        html += b+"    ";
    }
    console.log(html);
}

console.log("")
console.log("")
console.log("")

for(let a = 1; a <= 5; a++){
    let html = "";
    // loop 
    for(let b = 1; b <= 5 - (a-1); b++){
        html += b+"    ";
    }
    console.log(html);
}

console.log("")
console.log("")
console.log("")

for(let a = 5; a >= 1; a--){
    let html = "";
    // loop 
    for(let b = 1; b <= a; b++){
        html += b+ "    ";
    }
    console.log(html)
}


console.log("")
console.log("")
console.log("")
let a = 5;
while(a >= 1){
    let html = "";
    let b = 1;
    while(b <= a){
        html += b+"    ";
        b++;
    }
    console.log(html);
    a--;
}

/***
 * 
 * P
 * P    R
 * P    R    O
 * P    R    O    G
 * P    R    O    G    R
 * P    R    O    G    R    A
 * P    R    O    G    R    A    M
 * P    R    O    G    R    A    M    M
 * P    R    O    G    R    A    M    M    I
 * P    R    O    G    R    A    M    M    I    N
 * P    R    O    G    R    A    M    M    I    N    G
 * 
 * 
 * 
 * 
 * *  *  *  *  *  *  *  *
 * *                    *
 * *                    *
 * *                    *
 * *                    *
 * *                    *
 * *                    *
 * *  *  *  *  *  *  *  *
 * 
 */
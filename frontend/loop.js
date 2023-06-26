// Types of loop 
// do-while 
// while
// for 
// for-of
// for-in 
//
// .map()
// .filter()
// .reduce()
// .forEach()

// Functions 
// synchronous and Asynchronous

// OOP

// Ecommerce 

let i = 11;              // i = 11

do {
    console.log(i)      // 11
    i++                 // i = 12
} while (i <= 10)        // 12 <= 10 => false
// execute 

i = 1;
while (i <= 10) {
    console.log(i)
    i++
}

for (let j = 1; j <= 10; j++) {
    console.log(j)
}

let j = 1;
for (; j <= 10; j++) {
    console.log(j)
}


j = 1;
for (; j <= 10;) {
    console.log(j)
    j++
}


j = 1;
for (; ;) {
    if (j == 10) {
        break;
    }
    console.log(j)
    j++
}




let students = [
    {
        name: "Student One",
        id: 1,
        session: 'MERN-Stack',
        marksObt: 400
    },
    {
        name: "Student Two",
        id: 2,
        session: 'MERN-Stack',
        marksObt: 320
    },
    {
        name: "Student Three",
        id: 3,
        session: 'MERN-Stack',
        marksObt: 210
    },
    {
        name: "Student Four",
        id: 4,
        session: 'MERN-Stack',
        marksObt: 110
    },
]

let total = 500
// first student perc
let size = students.length; // no of elements in an array
// 0, 4 => 0 1 2 3 

// students => 4 
let std_5 = {
    name: "Student Five",
    id: 5,
    session: 'MERN-Stack',
    marksObt: 410
}



students.push(std_5);  /// array insert at end 
// array insert at the top 
students.unshift(std_5) // 0 => new, 0 => 1, 1 => 2 

// 0, 1, 2, 3, 4, 5 ===after shift===> 0, 1, 2 ,3 4
// let first = students.shift();   
// 0, 1, 2, 3, 4    ===after pop ===> 0, 1, 2, 3
// let last = students.pop()   
// 0, 1, 2, 3  ===> [1,2]   => 0, 1
// let coll = students.splice(1, 2)    // coll = [1index,2index]
// 0,1,2,3      [1indx, 2index] => 0,1,2,3
let data = students.slice(1, 3)    // [1index, 2index]

// 0, 1, 2, 3, 4, 5
delete students[2]
// 0,1,<empty slot>,3,4,5
// students[2] = std_5;    // replace existing object
console.log(students)

for (i = 0; i < size; i++) {
    let std = students[i];
    if (std) {
        let per = std.marksObt / total * 100
        std.percentage = per;
    }
}

// to access array inside for loop 
// index, value 
for (let x in students) {
    // x is the indexes of students
    let per = students[x].marksObt / total * 100
    students[x].percentage = per;
}
console.log("")
console.log("")

for (let std of students) {
    if (std) {
        let per = std.marksObt / total * 100
        std.percentage = per;
    }
}
console.log("")
console.log(students)

// Create an array of products with 
// name, price, discount in percentage 
// calculate discount amount and discounted value of price 

let products = [
    {
        name: "Product Name",
        price: 1000,
        discount: 10
    },
    {
        name: "Product Name 2",
        price: 2000,
        discount: 10
    }
]

// for(let p =0; p < products.length; p++){
//     let discountAmt = products[p].price * products[p].discount/100
//     products[p].discountAmt = discountAmt;
//     products[p].afterDiscount = products[p].price - discountAmt;
// }

// for(let p in products){
//     let discountAmt = products[p].price * products[p].discount/100
//     products[p].discountAmt = discountAmt;
//     products[p].afterDiscount = products[p].price - discountAmt;
// }

for(let pro of products){
    let discountAmt = pro.price * pro.discount/100
    pro.discountAmt = discountAmt;
    pro.afterDiscount = pro.price - discountAmt;
}
// loop use 
// calculation for all the products 
console.log(products)
/***
 * [
 *  {
 *      name: "Product Name",
 *      price: 1000,
 *      discount: 10,
 *      discountAmt: 100,
 *      afterDiscount: 900
 * }
 * ]
 * 
 * 
 */
// Create an array  of numbers. Find the sum of all the number in that Array
// Create an array of users with name, email, address, role(can be: admin, seller, user). 
// Insert atleast 10 users in the array
// Create a variable named adminUsers with filtered users having role admin
// sellerUsers with role seller
// customerUsers wth role customer
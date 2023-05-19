/** Decision Making statements
 * 
 * a. If-else 
 * b. esle-if 
 * c. switch-case
 * d. Loop (iteration)
 *      - do-while
 *      - while 
 *      - for 
 * 
 *      - for-of
 *      - for-in 
 *      - .map()
 *      - .filter()
 *      - .reduce()
 *      - .forEach()
 */

// truthy value 
// falsy value 
    // false , null, 0, empty variables, undefined
let x = 0;

// // nesting
// if(x == 0) {
//     // body 
//     if(y) {

//     } else {

//     }
// } else {
//     // optional
//     // body
//     if(z){

//     } else {

//     }
// }

let product = {
    price: 1000,
    discount: 0
}
console.log(product)

if(product.discount > 0){
    product.afterDiscount = product.price - product.price * product.discount /100;
} else {
    product.afterDiscount = product.price
}

// product.afterDiscount = product.price - product.price * product.discount /100;


console.log(product);

/**
 * Create a program in js to print division based on percentage. 
 * create two variable: marksObtained, percentage, consider 500 as total 
 * 1. calculate Percentage 
 * 2. Print 
 *      First division with Distinction if percentage >= 80
 *      First division                  if percentage >= 60, percentage < 80
 *      Second division                 if percentage >= 45, percentage < 60
 *      Third division                  if percentage >= 32, percentage < 45
 *      Sorry! You are failed           if percentage < 32
 * 
 */
let marksObtained = 430;
let percentage = marksObtained/5;
if(percentage >= 80){
    console.log("First division with distinction. Per: ", percentage);
} else {
    // < 80
    // 100 extra
    if(percentage >= 60) {
        console.log("First Division. Per: ", percentage)
    } else {
        // < 60
        // 100 lines
        if(percentage >= 45) {
            console.log("Second Division. Per: ", percentage)
        } else {
            // < 45
            // 100 lines
            if(percentage >= 32) {
                console.log("Third Division. Per: ", percentage)
            } else {
                // 
                console.log("Sorry! You are failed!! Per: ", percentage)
            }
        }
    }
}

if(percentage >= 80){
    console.log("First division with Distinction. Per: ", percentage)
} else if(percentage >= 60){
    console.log("First Division. Per: ", percentage)
} else if(percentage >= 45){
    console.log("Second Division. Per: ", percentage)
} else if(percentage >= 32){
    console.log("Third Division. Per: ", percentage)
} else if(percentage < 32){
    console.log("Sorry! You are failed. Per: ", percentage)
}

/**
 * 
 * Electricity Bill Calculator 
 * Consider totalUnitsCosumed = 150
 * The pricing rule is set as below: 
 *  a. Units consumed <= 20 => min Price: Npr. 80
 *  b. For next 10 units => price = 5 per unit
 *  c. For next 20 units => price = 7 per unit
 *  d. For next 50 units => price = 9 per unit
 *  e. after all units   => price = 15 unit
 * 
 * Calculate the total bill from the above calculation
 */


/**
 * Tax Calculator 
 *  Lets assume a developer earns Npr. 10000000 per year
 * The tax bracket defined as below: 
 *  a. For the first 500000 => 1% 
 *  b. For the next 200000  => 15%
 *  c. For the next 700000  => 20%
 *  d. For the next 1000000  => 25%
 *  e. Above that           => 36%
 * 
 * Calculate: 
 *  a. Total amount of tax to be paid yearly
 *  b. Amount of tax to be paid monthly
 *  c. Yearlay earning after Tax
 *  d. Monthly earning after tax
 */

// day 
let day = "Sunday";     // Saturday, Sunday => Holiday, Friday => Weekend, ... => Weekday

if(day === "Saturday" || day === 'Sunday'){
    console.log("Holiday")
} else if(day === 'Friday'){
    console.log("Weekend")
} else {
    console.log("Weekday")
}

switch(day){
    case "Satuday":
    case "Sunday":
        console.log("Holiday")
        break 
    case "Friday":
        console.log("Weekend")
        break;
    default:
        console.log("Weekday")
        break;
}
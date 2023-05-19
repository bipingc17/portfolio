let firstFunc = () => {
    return new Promise((res, rej) => {
        let x = false; 
        if(x) {
            res("I am resolve of 1")
        } else {
            rej("I am reject of 1")
        }
    })
}

let secondFunc = () => {
    return new Promise((res, rej) => {
        let x = false; 
        if(x) {
            res("I am resolve of 2")
        } else {
            rej("I am reject of 2")
        }
    })
}

let thirdFunc = () => {
    return new Promise((res, rej) => {
        let x = true; 
        if(x) {
            res("I am resolve of 3")
        } else {
            rej("I am reject of 3")
        }
    })
}

let promise_1 = firstFunc();    // promise
let promise_2 = secondFunc();   // promise
let promise_3 = thirdFunc();    // promise

let listProm = [promise_1, promise_2, promise_3];

// Promise.all(listProm)
// Promise.allSettled(listProm)
Promise.race(listProm)
.then((res) => {
    console.log("Resolve: ", res)
})
.catch((rej) => {
    console.log("reject: ", rej)
})

// all promise fulfilled 
// some promise fulfilled

// csv => 100 user infom, 80 success, 20 
    // seller => date => sales amount
// import sales report 
    // Campaign 
        // seller , sales,  duration, => sales to xp
        // any seller, >= 100000 => amount * 0.05 => xp
                        // < 0.01
// read the csv
    // => data => {name: "Seller 1", date: "2023-05-12", sales: 100000}
    // calculation => logic 
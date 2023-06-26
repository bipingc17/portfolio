let users = [
    {
        name: "User One",
        email: "userone@test.com",
        address: "Kathmandu",
        phone: 12313123123,
        role: "admin"
    },
    {
        name: "User Two",
        email: "usertwo@test.com",
        address: "Lalitpur",
        phone: 12313123123,
        role: "seller"
    },
    {
        name: "User Three",
        email: "userthree@test.com",
        address: "Bhaktapur",
        phone: 12313123123,
        role: "customer"
    },
    {
        name: "User Four",
        email: "userfour@test.com",
        address: "Kathmandu",
        phone: 12313123123,
        role: "admin"
    },
    {
        name: "User Five",
        email: "userfive@test.com",
        address: "Bhaktapur",
        phone: 12313123123,
        role: "customer"
    },
]
// [0, .., .., 3, ..]
let adminusers = [];
let sellerusers = [];
let customerusers = [];

// // adminusers = 
// users.map((user)=>{
//     // 
//     if(user.role === 'admin'){
//         adminusers.push(user)
//         // return user;
//     }
// })
// console.log(adminusers)

// for(let user of users){
//     if(user.role === 'admin'){
//         adminusers.push(user)   //
//     }
// }

// for(let user of users){
//     if(user.role === 'seller'){
//         sellerusers.push(user)   //
//     }
// }

// for(let user of users){
//     if(user.role === 'customer'){
//         customerusers.push(user)   //
//     }
// }

let products = [
    {
        id: 1, 
        name: "iPhone 13",
        price: 130000,
        discount: 10
    },
    {
        id: 2, 
        name: "iPhone 12",
        price: 120000,
        discount: 1
    }
]

const productLoop = (item) => {
    item.discountAmt = item.price * item.discount/100
    item.afterDiscount = item.price - item.discountAmt
    // return item;
}

let after = products.forEach(productLoop)

// console.log(products)
// console.log(after)

adminusers= users.filter((value) => (value.role === 'admin'))
sellerusers= users.filter((value) => (value.role === 'seller'))
customerusers= users.filter((value) => (value.role === 'customer'))

// console.log("")
// console.log(adminusers)


const login = (username, password, cb) => {
    // login logic 
    let status = true;  // success, false 
    if(status){
        cb(null, true)      // success login 
    } else {
        cb(true, false) // error login
    }
}
const afterLogin = (error, success) => {
    console.log(error, success)
}
login("us", "pwd", afterLogin)

// promise 

// time delay

// Promise is an object 
// promise => 
// Pending 
// fulfilled/reject
// settlement 
const myPromise = () => {
    // login function 
        // data validation 
            // success,
                // db validation 
                    // sucess, 
                        // token generation 
                            // succes, 
                                // => resolve
                            // failed
                                // => reject
                    // failed 
                        // => reject
            //  failed 
                // => reject
    
    // return new Promise((resolve, reject) =>{
    //     // time consuming 
    //     let status = true; 
    //     // resolve(status)       // fulfilled/success
    //     reject("I am reject")        //  reject/erorr/exception
    //     // no execute
    // })
    
}

// Promise.resolve();
// Promise.reject()

let loading = true
// then catch
myPromise()
    .then((data) => {
        // 
        console.log("Resolve", data)
        // define 
        // loading = false 
        // process
    })
    .catch((rej) => {
        // 
        console.log("Reject", rej)
        // define code 
        // loading = false
    })
    .finally(()=>{
        // common
        console.log("Finally")
        loading = false
    })

// console.log(myPromise)


const myProm1 = () => {
    return new Promise((res, rej) => {
        let x= true; 
        if(x) {
            res("i am resolve 1") 
        } else {
            rej("I am reject 1")
        }
    })
}

const myProm2 = () => {
    return new Promise((res, rej) => {
        let x= true; 
        if(x) {
            res("i am resolve 2") 
        } else {
            rej("I am reject 2")
        }
    })
}

myProm1()
    .then((res) => {
        // 
        console.log(res)
        myProm2()
            .then((res2)=> {
                console.log(res2)
            })
            .catch((rej) => {
                console.log(rej)
            })
    })
    .catch((rej) => {
        console.log(rej)
    })


myProm1()
    .then((res) => {
        // 
        console.log(res)
        return myProm2()

    })
    .then((res2)=> {
        console.log(res2)
    })
    
    .catch((rej) => {
        console.log(rej)
    })

    
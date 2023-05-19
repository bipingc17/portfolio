const doSomething = (cb) => {
    console.log("I am inside do something");
    // retrun true;
    cb(doNothing);
}

const withSomething = (cb) => {
    console.log("I am from withSomething")
    cb("I am from DoSomething");
}

const doNothing = (res) => {
    console.log("I am inside do nothing.")
    console.log("My param is: ", res);
}

doSomething(withSomething)
// let ret = doSomething()
// doNothing(ret);

// const test = (cb) => {
//     cb(true, false)
//     cb(false, true)
// }

// // const tes1  =(err, succ) => {

// // }

// test((err, succ) =>{
    
// })
console.log("")
const login = (credentials, cb) => {
    // logic: 
    let loginSuccess = true;
    if(loginSuccess){
        cb(false, true)
        cb(true, false)
    } else {
        cb(true, false)
    }
}

const dashboardeAccess = (donotallow, allow) => {
    if(donotallow){
        console.error("You do not have access")
    } else {
        console.log("Welcome to dashboard")
    }
}

login({email: true, password: true}, dashboardeAccess)
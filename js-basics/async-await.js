// let fullfilled = Promise.resolve()
// fullfilled.then()
// let reject = Promise.reject()
// reject.catch()

const login = () => {
    return new Promise((res, rej)=>{
        let success = true
        if(success) {
            res({name: "Loggedin User", email: "loggedinuser@test.com", address: "Kathmandu"});
        } else {
            rej({
                msg: "Error while login"
            });
        }
    });
}

const accessDashboard = (param) => {
    return new Promise((res, rej) => {
        if(param){
            res("I am admin accessible")
        } else {
            rej("I am not an admin User")
        }
    })
}

const testFunc = () => {
    return new Promise((res, rej) => {
        let controller = true; 
        if(controller) {
            res("I am from test Func")
        } else {
            rej("I am from rejc of test Func")
        }
    })
}


// login()
//     .then((res) => {
//         console.log("Resolve Login: ", res)
        
//         accessDashboard(res)
//             .then((res1) => {
//                 console.log("I am from Dashboard Access", res1)
                
//                 testFunc()
//                     .then((res2) => {
//                         console.log("I am from Test function", res2);
//                     })
//                     .catch((rej3) => {
//                         console.log(rej3)
//                     })
//             })
//             .catch((rej2) => {
//                 console.log("I am reject of Dashboard Access", rej2)
//             })

//     })
//     .catch((rej) => {
//         console.log("Reject Login: ", rej)
//     })


login()
    .then((res) => {       // login().then()
        console.log("Res1: ", res);
        return accessDashboard(res)
    })
    .then((res2) => { // accessDasboard().then()
        console.log("Res2: ", res2);    
        return testFunc()
    })
    .then((res3) => {   // testFunc().then()
        console.log("Res3: ", res3)
    })
    .catch((rej) => {
        console.log(rej);
    })



// let res = login();    // 3sec
// accessDashboard(res);  // 1sec ===> 4sec

// Promise 
// pending 
    // fullfilled / rejected
// setltlement

// const myPromise = new Promise((resolve, reject) => {
//     // code 
//     let userDetail = {name: "Sandesh Bhattarai"};
//     let success = true;     // true => fullfilled, false => reject
//     if(success){
//         resolve(userDetail)
//     } else {
//         reject(null)
//     }
// });

// myPromise
//     .then((res)=> {
//         // console.log("Resolve: ", res)
//         console.log(res.name)
//     })
//     .catch((err)=> {
//         console.log("reject: ", err)
//     })

// myPromise.then((res) => {
//     console.log("I am second Call")
// }).catch((rej) => {
//     console.log("I am second reject")
// })

    // console.log("Hello")
    // console.log("Hello")
    // console.log("Hello")
    // console.log("Hello")
    // console.log("Hello")
    // console.log("Hello")
    // console.log("Hello")
    // console.log("Hello")
    // console.log("Hello")
const fun1 = () => {
    return Promise((res, rej)=>{
        // res("Hello there")
        rej("Reject")
    })
}

// return type is always promise
const func2 = async () => {
    // return "Hello there" // return from async function ====> Resolve
    throw "Reject"  // throw from async function ====> Reject
}

// fun1()
//     .then()
//     .catch()


// func2()
//     .then()
//     .catch()

// if a function is returning a promise 
const hanlder = async ()=>{
    try{
        let resolve = await fun1()    // returns a resolve
        let resolve2 = await func2()    // this function waits till fun1() executes
    } catch(reject){
        // rejected state
    }
}

hanlder()
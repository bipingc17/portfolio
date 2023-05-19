const firstPromise = () => {
    return new Promise((res, rej) => {
        let x = true;
        if(x){
            res("I am resolve of 1")
        } else {
            rej("I am reject of 1")
        }
    })
}

const secondPromise =async () => {
    let x = false;
    if(x){
        return "I am resolve of 2"
    } else {
        throw "I am reject of 2"
    }
}

const getSecondProm = async() => {
    try{
        let resolve = await secondPromise()
        // let res = await login()
        // await accessDashboard(res)
    } catch(rej){
        console.log(rej)
    }
}
    
let response = getSecondProm();
console.log(response)
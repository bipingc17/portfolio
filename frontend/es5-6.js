// import {getName, user} from "./filepath" // named export import tech
// import getName from "./filepath" // default import 

// ES6
// named export 
export const getName = () => {
    return "My name is"
}
// named export 

export const user = {}

// default export  , a file can have max of one default export 
export default getName

// arrow function 
const func1 = () => {

}

// spread and rest operator // ...
// template literals

let name = "Sandesh"
let email = "user@test.com"
let notificaiton = 10;
// Dear Sandesh, your email: user@test.com have 10 notifications

// let str = "Dear "+name+", Your email: "+email+" have "+notificaiton+" notifications";
let str = `Dear ${name}, Your email: ${email} have ${notificaiton} notifications.`
// ECMA Scripts
const functionName = () => {
    return "helo";
}


const functonName1 = () => "hello";


const functionName1 = () => (
    "Hello",
    "hellothere"
);

// "", '', ``
let name  ="Sandesh";
let notCount = 3
// let emailtemplate = "Dear "+name+", You have "+notCount+" notifications"
let emailtemplate = `Dear ${name}, You have ${notCount} notifications`

console.log(emailtemplate)  // Dear Sandesh, You have 3 notificationss


// import and export 

// node_modules/

// http 
// Es5 import,
// const http = require('http');

// require("./class")
// const {User} =  require("./User.class");


// default export 
import User, {userObj} from "./User.class"
//import { userObj } from "./User.class";
// import * as Test from "User.class";

// import "class";

// Test.User()
let user = new User();
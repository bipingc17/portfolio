// es5,6
const fs = require("fs");

let users = [
    {
        name: "User One",
        email: "userone@gmail.com",
        password: "userone123",
        role: "student",
        address: "kathmandu"
    },
    {
        name: "User Two",
        email: "usertwo@gmail.com",
        password: "usertwo123",
        role: "student",
        address: "kathmandu"
    },
    {
        name: "User Three",
        email: "userthree@gmail.com",
        password: "userThree123",
        role: "admin",
        address: "kathmandu"
    },
]

let filePath = "./uploads/files/";

// filder exists 
if(!fs.existsSync(filePath)){
    fs.mkdirSync(filePath, {recursive: true})
}

filePath+= "user.json";
// ./uploads/files/user.json

// 
// open file 
// write in file 
// file close 


// fs.open(filePath,"w", (err, fd) => {
//     if(err) {
//         console.log("Error opening file...", err)
//     } else {
//         // f
//         let data = JSON.stringify(users);   // array => json string 
// fs.readFile(fd, {encoding: "utf8"}, (error, data) => {})
//         fs.write(fd,data, (error, bytes) => {
//             if(error) {
//                 console.log("Error writing in file")
//             } else {
//                 console.log(bytes+" bytes written in "+filePath);
//             }
//         })
//     }
// })
let data = JSON.stringify(users);   // array => json string 
fs.writeFileSync(filePath, data)

let readFile = fs.readFileSync(filePath,{encoding: "utf8"});
let userArray = JSON.parse(readFile);

let userToAppend = [{
    name: "User Four",
    email: "userfour@gmail.com",
    password: "userfour123",
    role: "admin",
    address: "kathmandu"
},
{
    name: "User Five",
    email: "userfive@gmail.com",
    password: "userfive123",
    role: "admin",
    address: "kathmandu"
},
]
userArray.push(userToAppend);
fs.writeFileSync(filePath, JSON.stringify(userArray));


readFile = fs.readFileSync(filePath,{encoding: "utf8"});
userArray = JSON.parse(readFile);
console.log(userArray)
// asynchronous features 
// synchronous call

// functions 
console.log("I am here on line 1")      // 3 sec
console.log("I am on line no. 2")       // 1 sec
console.log("I am on line no. 3")       // 1 sec
console.log("I am on line no. 4")       // 2 sec

function addNumber(a, b){
    // scope or body 
    let c = a + b;
    return c;   // optional 
}
// c 

function login(email, password){
    // LOGIC: Login login
    // handling 
    let user = {}
    return user;
}

const login1 = function(email, password){

}

// Arrow functions
const login2 = (emnail, password) => {
    // this provides only functional socpe
    // constructor => can not be an arrow 
    // super keyword cannot be used inside arrow function 
}

const auth = {
    login: (email, pwd) => {

    },
    name: "Value"
}

auth.login("", "")

let arr = []

auth['name']    // allowed
//arr.0;


login1("username", "password")

let result = addNumber(10, 20)   // call 
console.log(result);        // 30

let name = "sandesh"        // string 
name = name.toUpperCase();
console.log(name);  // SANDESH

let numb = 123.2342341243;  // 2 digit
numb.toFixed(2)     // 123.23


// Recursive 
let cateogry = [
    {
        name: "Electronics",
        childCat: [
            {
                name: "Child 1",
                childCat: [
                    {
                        name: "Child 1 1",
                        childCat: [
                            {
                                name: "Child 1 1 1",
                                childCat: null
                            }
                        ]
                    }
                ]
            },
            {
                name: "Child 2",
                childCat: [
                    {
                        name: "Child 2 1",
                        childCat: [
                            {
                                name: "Child 2 1 1",
                                childCat: null
                            }
                        ]
                    }
                ]
            }

        ]
    },
    {
        name: "Smart Phones",
        childCat: [
            {
                name: "Child 2",
                childCat: [
                    {
                        name: "Child 2 1",
                        childCat: [
                            {
                                name: "Child 2 1 1",
                                childCat: null
                            }
                        ]
                    }
                ]
            }
        ]

    }
]
console.log("")

const printCat = (data, iteration = 0) => {
    for(let i = 0; i < data.length; i++){
        let toPrint = "";
        if(iteration){
            for(let j = 0; j < iteration; j++){
                toPrint += "    "
            }
        }
        toPrint += data[i].name;

        console.log(toPrint);
        if(data[i].childCat){
            printCat(data[i].childCat, (iteration+1))
        }
    }
    console.log("")
}
// cateogry shold be defined
printCat(cateogry)



// for(let i = 0; i < cateogry.length; i++){
//     console.log(cateogry[i].name)       // Electronics \n Smart Phones
    
//     if(cateogry[i].childCat){
//         for(let j=0; j < cateogry[i].childCat.length; j++){
//             console.log(cateogry[i].childCat[j].name)   // Child 1
                
//                 if(cateogry[i].childCat[j].childCat){
                    
//                 }
//         }
//     }
// }
/**
 * Electronics
 *      Child 1
 *          Child 1 1
 *              Child 1 1 2
 * Smart Phones
 *      Child 2 
 *          Child 2 1 
 *              Child 2 1 1
 */

// Clouser 
const clouser1 = () => {
    // code block 
    const doSometing = () => {
        // clouser
    }
}   

// api consume 
// let response = axios.get('/banner data)
// response handler 
const apiget = ()=> {
    // logic 
    const showData = (data) => {
        // code 
        return "";
    }

    return showData
}
let response = apiget()    // async 
// response => showData
response(); // showData()

// let data = apiget2()
// response(data);

// callback 
const apiget2 = (cb) => {
    //
    cb()
}

const getData = () => {
    // 
}

apiget2(getData)
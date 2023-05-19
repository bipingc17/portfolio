const addNumber = ({a,b,c=0,d,e,f}) => {
    return a + b + c + d + e + f;
}

const divNumber = (b, a) =>{
    let c = a/b;
}

divNumber(10, 20)

let user = {
    name: "",
    email: "",
    address: ""
}

let {name, email, address} = user;

console.log(addNumber({a: 1,b:2,d: 4,e: 5,f: 6})) 


// clouser functions
// Recrusive Functions
// Async function
    // callback 
    // promise 
    // async-await
    // then.catch


const doSomething = () => {
    console.log("I am inside dosomething")

    // return 
    const doNothing = () => {
        // par
        console.log("I am inside doNothing")
    }
    return doNothing;   // socpe return 
}

const result = doSomething();          // 3sec

// todo....
// doNothing();            // 1sec

// doNothing()
result();

console.log("")


const calculator = () => {
    // sum, sub, div, mul, a b 
    
        sum= a+b;
        sub= a-b;
        mul= a*b;
        div= a/b
    
}
let a = 10;
let b = 20; 
let sum, sub, mul, div;
calculator()

console.log(sum)        // 30
console.log(sub)        // -10
console.log(mul)        // 200
console.log(div)        // 0.5
// sum, sub, mul, div

// let {sum,sub,mul,div} = calculator(a, b)
// 

let categories = [
    {
        name: "Cat 1",
        children: [
            {
                name: "Child cat 1",
                children: [{
                    name: "Child child cat 1",
                    children: [{
                        name: "Child child child cat 1",
                        children: null
                    }]
                }]
            }
        ]
    },
    {
        name: "Cat 2",
        children: [
            {
                name: "Child cat 2",
                children: [{
                    name: "Child child cat 2",
                    children: [{
                        name: "Child child child cat 2",
                        children: null
                    }]
                }]
            },
            {
                name: "Child cat 2 1",
                children: [{
                    name: "Child child cat 2 ",
                    children: [{
                        name: "Child child child cat 2 1",
                        children: null
                    }]
                }]
            }
        ]
    }
]
// Cat 1
//      Child cat 1
//          Child child cat 1
//              Child child child cat 1
// Cat 2
//      Child cat 2
//          Child child cat 2
//              Child child child cat 2
//      Child cat 2 1
//          Child child cat 2 1
//              Child child child cat 2 1

// random str 
// 
// ["","","",""]    
// str 

// slug 
// /mern-stack-development-training-in-nepal
// /aasdlfjaslfd36465
// /graphic-design-training-in-nepal
// /android-training-in-nepal

// :slug

// title => Mern stack Development Training in Nepal
// mern-stack-development-training-in-nepal-8

const searchSlug = (title, it = 1) => {
    let slug = title;
    // db operation 
    let find = true;    // false
    if(it === 10){
        find = false
    }
    
    if(find){
        slug +=  it++;
        
        searchSlug(slug, it);
    } else {
        return slug;
    }
}
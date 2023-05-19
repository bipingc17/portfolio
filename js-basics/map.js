let allUsers = [
    {
        id: 1,
        name: "Sandesh Bhattarai",
        email: "sandesh@broadwayinfosys.com",
        address: "Kathmandu",
        phone: "+977 9876543210"
    },
    {
        id: 2,
        name: "User one",
        email: "userone@broadwayinfosys.com",
        address: "Kathmandu",
        phone: "+977 987604321"
    },
    {
        id:3,
        name: "User one",
        email: "userone@broadwayinfosys.com",
        address: "Kathmandu",
        phone: "+977 987604321"
    }
];


// array 
// map, foreach, filter, reduce

// 
let names = allUsers.map((user, i) => {
    return user.name
});

console.log(names)


let numbs = [1,2,3,4,5,6]
let evenArray = [];

const getEvenArray = (numbs) => {
    // for(let i = 0; i < numbs.length; i++){
    //     if(numbs[i] %2 === 0){
    //         evenArray.push(numbs[i])
    //     }
    // }
    
    numbs.map((num) => {

        if(num %2 === 0){
            evenArray.push(num)
        }
        // return (num%2 === 0) ? num : null
    })
}

getEvenArray(numbs)
console.log(evenArray)

// create a function to calculate discounted values for all the products
// Create a var called products
// store atleast 5 elements with name, price, discount property
// call the function to calculate discounted value
// assign after disocunt value to the same object
// print the whole object

let products = [
    {
        name: "Product 1",
        price: 100,
        discount: 10
    },
    {
        name: "Product 2",
        price: 2000,
        discount: 5
    }
]
const calculateValue = () => {
    products.map((prod) => {
        let dis = prod.price - prod.price * prod.discount/100;
        prod.afterdiscount = dis;
    })
    // return prods;
}
calculateValue();
// Function, call 
console.log(products)
/**[
    {
        name: "Product 1",
        price: 100,
        discount: 10,
        afterDiscount: 90
    }
] */
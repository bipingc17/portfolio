// array objects
// name, email, add, phone 
// let user1_name = "Sandesh bhattarai"
// let user1_email = "sandesh@broadwayinfosys.com"
// let user1_address = "Kathmandu"
// let user1_phone = 123456789

let user1 = {
    name: "Sandesh Bhattarai",
    email: "sandesh@broadwayinfosys.com",
    address: "Kathmandu",
    phone: "+977 9876543210"
}

let allUsers = [
    {
        name: "Sandesh Bhattarai",
        email: "sandesh@broadwayinfosys.com",
        address: "Kathmandu",
        phone: "+977 9876543210"
    },
    {
        name: "User one",
        email: "userone@broadwayinfosys.com",
        address: "Kathmandu",
        phone: "+977 987604321"
    }
];

// 0, 1, <empty>, <empty>, <empty>, data
// let allUsers1 = new Array();

// Name: ......, Email: ....., Address: ......, Phone: .......
// console.log(typeof allUsers);

// console.log("")
// let arrSize = allUsers.length;

// for(let i = 0; i < arrSize; i++){
//     console.log(
//         "Name: "+allUsers[i].name+
//         ", Email: "+allUsers[i].email+
//         ", Address: "+allUsers[i].address+
//         ", Phone: "+allUsers[i].phone
//     )
// }

// for(let i in allUsers){
//         console.log(
//         "Name: "+allUsers[i].name+
//         ", Email: "+allUsers[i].email+
//         ", Address: "+allUsers[i].address+
//         ", Phone: "+allUsers[i].phone
//     )
// }

for(let user of allUsers){
    // console.log(
    //     "Name: "+user.name+
    //     ", Email: "+user.email+
    //     ", Address: "+user.address+
    //     ", Phone: "+user.phone
    // )
}

//console.log("Name: "+allUsers[1].name+", Email: "+allUsers[1].email+", Address: "+allUsers[1].address+", Phone: "+allUsers[1].phone)


let allProducts = [];   // null
// entry 
let product1 = {
    name: "iPhone 13",
    price: 138000,
    discount: 10,
    brand: "apple"
}

// array push 
// 
allProducts.push(product1);     // 0

let product2 = {
    name: "iPhone 12",
    price: 120000,
    disocunt: 1,
    brand: "apple"
}

allProducts.push(product2);     // 1

// 0, 1
let product3 = {
    name: "MacBook pro",
    price: 200000,
    discount: 0,
    brand: "apple"
}

// 0,1,2

allProducts.unshift(product3);

// 0,1,2
// to be populated => 3
let product4 ={
    name: "Samsung Galaxy S22",
    price: 150000,
    discount: 10,
    brand: "Samsung"
}
// 3 
let size = allProducts.length;

// last index = size01
allProducts[5] = product4;  // correct

//allProducts[1] = product4 

// 0,1,2,3,4,5

// 0,1,2,3,4,5,6

// allProducts.push(product4);

// console.log(allProducts);

//for(let i =0; i < allProducts.length; i++){
// for (let i in allProducts){
for(let prod of allProducts){
    if(prod){
        console.log(prod.name)
    }
}
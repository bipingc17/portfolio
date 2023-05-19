let users = [
    {
        name: "User One",
        role: "admin",
        address: "kathmandu",
        language: ["php",'node','react']
    },
    {
        name: "User Two",
        role: "student",
        address: "lalitpur",
        language: ['node']
    },
    {
        name: "User Three",
        role: "student",
        address: "bhaktapur",
        language: ['react']
    },{
        name: "User Four",
        role: "admin",
        address: "kathmandu",
        language: ['node','react', "express"]
    },
    {
        name: "User Five",
        role: "student",
        address: "Bhaktapur",
        language: ['react']
    },
    {
        name: "User Six",
        role: "admin",
        address: "banepa",
        language: ['react']
    }
]

// filter all the admin users in an array

let admins = []

// users.forEach((userDetail) => {
//     if(userDetail.role === 'admin'){
//         admins.push(userDetail);
//     }
// })

admins = users.filter((item) => item.role === 'admin')
console.log(admins)

//

let userList= null;

// loop[ 
    // every elemnt read 
        // ele.address, userList
        // first user address => kathmandu
        // o
        // userList[kathmandu] = 
        // product['afterDiscount']
// let userList = {
//     kathmandu: [
//         {
//             name: "User One",
//             role: "admin",
//             address: "kathmandu",
//             language: ["php",'node','react']
//         },
//         {
//             name: "User Four",
//             role: "admin",
//             address: "kathmandu",
//             language: ['node','react', "express"]
//         }
//     ],
//     bhaktapur: [
//         {
//             name: "User Three",
//             role: "student",
//             address: "bhaktapur",
//             language: ['react']
//         },
//         {
//             name: "User Five",
//             role: "student",
//             address: "Bhaktapur",
//             language: ['react']
//         }
//     ],
//     lalitpur: [
//         {
//             name: "User Two",
//             role: "student",
//             address: "lalitpur",
//             language: ['node']
//         }
//     ],
//     banepa: [
//         {
//             name: "User Six",
//             role: "admin",
//             address: "banepa",
//             language: ['react']
//         }
//     ]
// }
// if(users[1].role === 'admin') {
//     admins.push(users[1])
// }

// if(users[2].role === 'admin') {
//     admins.push(users[2])
// }

// users[0].role === 'admin' ? admins.push(users[0]): "";
// users[1].role === 'admin' ? admins.push(users[1]): "";
// users[2].role === 'admin' ? admins.push(users[2]): "";
// users[3].role === 'admin' ? admins.push(users[3]): "";
// users[4].role === 'admin' ? admins.push(users[4]): "";

// 10Array.fill

// let array = [...Array(10)];  // [10 empty slots]
[...Array(10)].map((item, index) => {
    console.log(index);
})

// users.every((item, index)=> {
//     console.log(item)
// })
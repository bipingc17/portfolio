let product = [
    'iPhone 12',
    128000,
    10,         // discount
    15,         // stock
    "apple",
    "Oliz Store"
]

let product_1 = {
    name: "iPhone 12",
    price: 128000,
    discount: 10,
    stock: 15,
    brand: "apple",
    store: "Oliz Store"
}

let allProducts = [
    {
        name: "iPhone 12",
        price: 128000,
        discount: 10,
        stock: 15,
        brand: "apple",
        store: "Oliz Store"
    },
    {
        name: "iPhone 13",
        price: 138000,
        discount: 10,
        stock: 15,
        brand: "apple",
        store: "Oliz Store"
    },
    {
        name: "iPhone 14",
        price: 175000,
        discount: 0,
        stock: 10,
        brand: "apple",
        store: "Oliz Store"
    }
]

console.log(allProducts[2].name)
console.log(allProducts[2]['name'])

console.log(typeof product);    // object
console.log(typeof product_1);  // object

product[6] = product[1] - product[1] * product[2] / 100;

product_1.afterDiscount = product_1['price'] - product_1.price * product_1.discount / 100;

product[3] =  product[3]-1;
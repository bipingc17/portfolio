class User{
    name;

    constructor(_name){
        this.name = _name;
    }

}

let obj = new User("Sandesh Bhattarai")

console.log(obj)

class Product{
    constructor(name, price, discount){
        this.name = name; 
        this.price = price;
        this.discount = discount;

        this.discountAmt();
        this.#afterDiscount();
    }

    discountAmt = () => {
        this.discountAmount = this.price* this.discount/100
    }

    #afterDiscount = () => {
        this.afterDiscountAmount = this.price - this.discountAmount;
    }
}

const prodObj = new Product("Name", 100, 10)   // disoucnt  
// prodObj.afterDiscount()
console.log(prodObj);
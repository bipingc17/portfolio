class User {
    name;
    email;
    constructor(_name) {
        this.name = _name
        console.log("I am in user class")
    }
    getName (){
        return this.name;
    }
}

class Admin extends User{
    role = "admin";
    constructor(name) {
        super(name)
        console.log("I am in admin class");
    }
    getName(){
        // 
        
        return "Your name is: "+(super.getName());
    }
}
const adminObj = new Admin("Admin user new");
console.log(adminObj.getName())

class Student extends User {
    role = "student";
    
}

const stuOb = new Student("Student Name")
stuOb.getName()
const admin = new Admin("Admin user")
console.log(admin);

// Create two classes 
// First to take the input, length, width and height (Measurement)
// Add a function to calculate volume in the first class
// Create a second class Square 
// take length as a value from constructor in Square class 
// Calculate volume by overriding the function from first class (volume = l^3)
class Measurement{
    l;
    b;
    h; 
    constructor(l, b=null,h=null){
        this.l = l;
        this.b = b;
        this.h = h;
    }

    volume(){
        return this.l * this.b * this.h;
    }
}
setInterval(() => {
    const date = new Date();
    let hour = date.getHours()
    let minute = date.getMinutes();
    let second = date.getSeconds();
    document.getElementById('date').innerHTML = hour+":"+minute+":"+second
}, 1000)
class Cuboid extends Measurement{
    constructor(l,b,h){
        super(l,b,h)
    }
}
const cubObj = new Cuboid(1,2,3)
console.log(cubObj.volume());

console.log("")
class Cube extends Measurement{
    constructor(l){
        super(l)
    }
    volume () {
        return Math.pow(this.l, 3);
    }
}
const cubeObj = new Cube(3)
console.log(cubeObj.volume());
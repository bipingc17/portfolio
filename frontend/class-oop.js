// A, B, C, D
// A <=== B <=== C <=== D => obj->c, obj->b, obj->a

// Encapsulation
    // data enclosed inside a class 
    // security to the data
    // Visibility

// Abstraction 

// Inheritance 
    // reusability 

// Polymorphism
    // many form of a single data

//let name

class UserClass{
    // data add 
    name;
    email;
    #role;  // private property

    constructor(){
        console.log("I am in constructor")
    }

    setName = (_name) =>{
        this.name = _name
    }
    getName= () => {
        return this.name
    }

    getRole = () =>{
        return this.#role;
    }
}

class AdminUser extends UserClass{
    getAdmin = () => {
        console.log("I am inadmin")
    }
}

class TestUser extends AdminUser{
    // 
}

const userObj = new TestUser()//   this will auto call constructor
console.log(userObj)
userObj.setName("Sandesh Bhattarai")

console.log(userObj.getName())

// Constructor overriding
class Foo {
    constructor(){
        console.log("I am in Foo class")
        // task logic develop
    }
}

class Bar extends Foo {
    constructor(){
        super() // super Constructor
        console.log("i am in bar class")
        // custom logic
    }
}

const barObj = new Bar();

class Group {
    groupName = 'Group One';  // Group One
    getName() {
        return this.groupName;
    }
}

class StudentGroup extends Group{
    getName() {
        // this is overriding 
        return "My name is: "+super.getName();
    }
}
const stdGrp = new StudentGroup()
console.log(stdGrp.getName())

class TeacherGroup extends Group{

}

class Departments extends Group{

}
class User{
    // data, method 
    name;   // public 
    // _email;     // protected, self and child (inheritance)
    // #password;  // private Variable, Self onnly

    setName = (_name) => {
        this.name = _name
    }

    getName (){
        return this.name
    }
}

let userObj = new User();
userObj.setName('Sandesh Bhattarai')
// userObj.name = "Sandesh Bhattarai";
// userObj._email = "test@test.com";
//
console.log(userObj.getName())
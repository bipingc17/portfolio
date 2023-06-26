// user 
//// classes => Data, functions/methods
// prototype based 
// pascal case or studlycaps
function UserClass(_name, _email, _role){
    this.name  = _name;
    this.email = _email
    this.role = _role
}

UserClass.prototype.getname = function(){
    // property 
    return this.name;   // Name value   
}

const userObj = new UserClass("Sandesh Bhattarai", "sandesh@broadwayinfosys.com", "Teacher");    // create an object
console.log(userObj)
console.log(userObj.getname())

console.log(userObj instanceof UserClass)
const getName = () => {
    return new Promise((resolve, reject) => {
        let name = prompt("Enter your name: ")
        if(name){
            resolve(name)
        } else {
            reject("Enter your name")
        }
    })
}

const getPassword = (name) => {
    return new Promise((resolve, reject) => {
        let password = prompt("Enter your password: ")
        if(password){
            resolve({name: name, password: password})
        } else {
            reject("Enter your password")
        }
    })
}

getName()
.then((name) => {
    //alert("Your name is: "+ name)
    getPassword(name)
        .then((credential) => {
            // validation 
            alert("Your name:"+credential.name+", Your password: "+credential.password)
        })
        .catch((rej) => {
            getPassword(name)
        })
})
.catch((rej) => {
    alert(rej)
    getName();
})
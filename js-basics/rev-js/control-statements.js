// truthy value
// falsy value => null, empty var, 0, false, undefined
let x = false;
if(x) {
    // body
    // any code block anything
    // if() {} else {}
} else {
    // optional
    // else body
}

if(exp) {
    // 
} else if(exp) {
    
}else if(exp) {
    
}else if(exp) {
    
}else if(exp) {
    
} else {
    // default 
    // optional  
}

let day = "Friday";

if(day === 'Friday'){
    console.log("Weekend")
} else if(day === 'Saturday' || day === 'Sunday') {
    console.log("Holiday")
} else {
    console.log("Weekday")
}

switch(day){
    case "Friday":
        console.log("Weekend");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Holiday")
        break;
    default: 
        console.log("Weekday")
        break;  // optional
}
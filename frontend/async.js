const first = (cb) => {        // t sec
   setTimeout(()=>{
        console.log("I am first")
   }, 3000)
   cb()
}

const second = () => {      // t1
    setTimeout(() => {
        console.log("I am second")
    }, 2000)
}

// first(second)     // 3 sec

// second()    // 5sec
// t + t1 sec
const appendZero = (numb) => {
    if(numb < 10) {
        numb = "0"+numb
    }
    return numb
}

const getClock = () => {
    let date = new Date();
    let hour = date.getHours()  // hours
    let minute = date.getMinutes()
    let sec = date.getSeconds()

    hour = appendZero(hour)
    minute = appendZero(minute)
    sec = appendZero(sec)
    
    document.getElementById('clock').innerHTML = (hour+":"+minute+":"+sec)
}

setInterval(getClock, 1000);
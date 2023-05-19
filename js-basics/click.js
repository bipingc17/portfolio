let user = {};
let allUsers = [];
let count = 0;
let htmlVar;

const getName = () => {
    let name = prompt("Enter your name....")
    document.getElementById("name").innerHTML = name;
    document.getElementById('clickBtn').removeAttribute('disabled')
    document.getElementById('nameBtn').setAttribute('disabled', 'disabled')
    user.name = name;
}

const tablePopulate = (userDetail, index) =>{
    htmlVar += "<tr>"
    htmlVar += "<td>"+(index+1)+"</td>"
    htmlVar += "<td>"+(userDetail.name)+"</td>"
    htmlVar += "<td>"+(userDetail.count)+"</td>"
    htmlVar += "</tr>"
}
const resetGame = () => {
    user = {}
    count = 0;
    name = null;
    document.getElementById('clickBtnTxt').innerHTML = "Start Game"
    document.getElementById("name").innerHTML = "....";
    document.getElementById('count').innerHTML = 0;
    document.getElementById('nameBtn').removeAttribute('disabled')
    document.getElementById('clickBtn').setAttribute('disabled', 'disabled')

}
const setDisplay = () => {
    
    allUsers.push(user)
    resetGame()
    htmlVar = "";
    allUsers.map(tablePopulate)
    document.getElementById('displayTxt').innerHTML = htmlVar
    // value display in table 
    // reset the flow 

}
const startGame = () =>{
    // 
    if(count === 0){
        // first click

        document.getElementById('clickBtnTxt').innerHTML = "Click More"
        setTimeout(setDisplay, 5000)
    }

    count++
    document.getElementById('count').innerHTML = count;
    user.count = count;
}

// let count =  0;

// let name = prompt("Enter Your name: ")
// document.getElementById("name").innerHTML = name;

// const increaseCounter = () => {
//     count++;
//     document.getElementById('counter').innerHTML = count
// }
// setTimeout(() => {
//     // ....
// }, 5000);
/** 
 * ** Create a Javascript Program to create a game with how many times does a user click the button
 * Click the Button 
 * - For the first time when a user open the page, it should show two buttons: 
 *      enter name , start game
 *  - clicking on the enter name button shold open a popup to write user name 
 *  - once the user name is entered and the popup is closed, the start game button comes in action 
 *  - When I first click on the start game button, it should change to click more 
 *  - this event should run for 5 second after the first time button is clicked
 *  - When time reaches to 5 second, it should load a list of data regarding the name enter with counter value
 * - without reloading the page, the game should now again reset but the older data should be persist. 
 * 
 * 
 * 
 * 
 * Task- 2
 * Product 
 *  name, price, discount 
 * - populate for all the products 
 *      - name and price is compulsory
 *          - once name is entered, then only allow to enter the price and only to the discount 
 * - populate a table with calculated after discount value and discount amount 
 * 
 * 
 * ...................................
 * sn       Name            Price           Discount(%)     Discount Amount         After Discount
 * -------------------------------------------------------------------------------------------------
 * 1        iPhone          10000           10              1000                    9000
 * -------------------------------------------------------------------------------------------------
 * 2        new Prod        1000            20              200                     800
 * -------------------------------------------------------------------------------------------------
 * 3        Another         100             0               0                       100
*/
// let a = 10
// const b = 20
// var c = 30

let a = 300

if(true){
let a = 10
const b = 20
var c = 30
console.log("Inner ", a);

}
 /* Here var ki value if statement ke andar ha fir
bhi run ho rahi hai isliye hum var use nahi karte
due to the problem of scope jabki a and b run nahi ho rahi
wo error message show kar rahi hai a or b is not defined. */

console.log(a);
console.log(b);
console.log(c);


function one(){
    const username = "Rohit"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    console.log(website)

    two()

}

one()

if(true){
    const username = "Rohit"
    if(username === "Rohit"){
        const website = " Youtube"
         console.log(username + website)
    }

    console.log(website)

}
console.log(username)


//+++++++++++++++++ INTERASTING CASE :- Two ways to build the function  

function addone(num){  // Declaring a funtion 
    return num + 1
}
addone(5)


const addTwo = function (num){ // Also declaring a function but a variable holds function.
return num + 2

}
addTwo(5)

// The key difference between both the function declartion is that 
// in fuction addTwo we cannot access this one before initialization.
//  But function addone can be access before initialization.

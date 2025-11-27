// IF Statement
const isUserloggedIn = true
const temperature = 41

// if(temperature < 50){
//     console.log("less than 50");
// } else {
//      console.log("temperature is greater than 50 ");
// }


// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if(score >100){
//     const power = "Like Batman"
//     console.log(`User Power:- ${power}`);
// }


//const balance = 1000

//if(balance > 500) console.log("test"), console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
    
// }


const UserloggedIn = true
const debitCard = true
const loginbygoogle = false
const loginbygmail = true

if(UserloggedIn && debitCard){
    console.log("Allowed for shoping");
    
}

if(loginbygoogle || loginbygmail){
    console.log("User logged In")
}
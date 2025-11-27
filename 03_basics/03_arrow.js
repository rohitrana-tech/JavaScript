const user = {
    username: " Rohit",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username} , welcome to website `);
        // If we want to refer current context then we use this keyword
        
       console.log(this);
       
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


console.log(this);
// While we running this in the browser the global object we get is Window.
// while we run this in node environment it gives {} (Empty Parantheses)
// Global execution context of this is window object


function one (){
    let username = "Rohit"
    console.log(this.username);   // Output :- undefined
}
one()


const one = function () {
    let username = "Rohit"
    console.log(this.username);  // Output :- undefined
}

// Arrow Function 
const one = () => {
    let username = "Rohit"
    console.log(this.username);  // Output :- undefined
}

one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) =>  num1 + num2


//const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "Rohit"})


console.log(addTwo(13, 29))


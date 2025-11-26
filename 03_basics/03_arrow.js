const user = {
    username: " Rohit",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username} ,welcome to website `);
        // If we want to refer current context then we use this keyword
        

    }
}

user.welcomeMessage()
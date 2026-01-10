// Object Literals

const user = {
    username: "Rohit",
    loginCount: 18,
    signedIn: true,



     getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`username: ${this.username}`)
        //console.log(this);
        
     }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



// const promiseOne = new Promise()
// const date  = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function (){
        console.log(`Welcome ${this.username}`);
        
    }

    return this;

}

const userOne = new User('Rohit', 12, true)
const userTwo = new User('ChaiAurCode', 18, false)
// When we use new keyword firstly an empty object is created(that is known as instance)

console.log(userOne);
console.log(userTwo);

/* There are two ways to declare object in JavaScript
1. Literal ki traha
2. Constructor ki traha 
Constructor se jab hum object create karte ha to Singleton banta hai.
Singleton means ye aapne traha ka ek he object banta hai but 
literals se jab object banate hai to singleton nahi banta */

// Object Literals

//Symbol
const mysym = Symbol("key1")// Now we will see how to use symbol as a key.


const User = {
    name: "Rohit",// By default name is process in the system as "name " (String).
    "full name": "Rohit Rana",
    age: 20,
    location: "Hapur",
    email: "Rohit@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday" , "Saturday" ],
    [mysym]: "key"
}

// Two ways to access Objects.
console.log(User.email)
console.log(User["email"])
console.log(User["full name"]);
console.log(User[mysym]); 
// Here agar hum iska typeof check karange to string show hoga. 
// but hum agar isse symbol ki tarha isse use karna ha to [mysym] likhna hoga.

User.email = "Rohit@Chatgpt.com"
Object.freeze(User) // it stops the changes to propagate furture.
User.email = "Rohit@microsoft.com"
console.log(User)

User.greeting = function(){
    console.log("Hello User")
}

User.greetingOne = function(){
    console.log(`Hello User, ${this.name}`)
}

console.log(User.greeting());
console.log(User.greetingOne());









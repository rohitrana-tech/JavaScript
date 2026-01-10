// let myName = "Rohit     "

// console.log(myName.trueLength);


let myHeros = ["thor", "ironman"]

let heroPower = {
    thor: "hammer",
    ironman: "intelligence",


    getIronmanPower: function (){
        console.log(`Ironman power is ${this.ironman}`);
        
    }
}

Object.prototype.rohit = function(){
    console.log(`Rohit is present in all objects`);
    
}

Array.prototype.heyRohit = function(){
    console.log(`Rohit says hello`);
    
}

//heroPower.rohit()
// myHeros.rohit()
// myHeros.heyRohit()
//heroPower.heyRohit()



// Inheritence

const User = {
name: "Rana",
emai: "rana@google.com" 
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport= {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function (){
    
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"Rohit".trueLength()
"Batman".trueLength() 


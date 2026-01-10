// All the descisions happen in 09 and 10 folder is happens after JS ES6
// Classes are templates for creating objects 

// class person {
//     constructor(name, email, password){
//         this.email = email;
//         this.name = name;
//         this.password = password;
//     }

//     encryptPassword(){
//         return  `${this.password}abc`
//     }

//     username (){
//         return`${this.name.toUpperCase()}`
//     }

// }

// const chai = new person("Rohit", "rana@gmail.com", "14222")

// console.log(chai.encryptPassword());
// console.log(chai.username());


// Behind the scene 

function person (name, email, password){
    this.email = email;
        this.name = name;
        this.password = password;

}

person.prototype.encryptPassword = function(){
     return  `${this.password}abc`
}

person.prototype.username = function(){
    return`${this.name.toUpperCase()}`
}


const tea = new person("Rohit", "rana@gmail.com", "14222")

console.log(tea.encryptPassword());
console.log(tea.username());
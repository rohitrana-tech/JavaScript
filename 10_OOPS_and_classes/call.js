function setUsername(username){
    // Complex DB calls to set username
    this.username = username;
}

function createUser(username, email, password){
    setUsername.call(this,username)
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@example.com", "12345")
console.log(chai);

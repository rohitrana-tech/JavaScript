class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(string){
       this._email = string.toUpperCase()
    }

    get password(){
        return `${this._password}rohit`
    }

    set password(value){
       this._password = value
    }
}

const rohit = new User('r@rana.ai', 'abirrinv')
console.log(rohit.email);

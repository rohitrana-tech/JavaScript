class User {
   constructor(username){
        this.username = username
   }

   logMe(){
    console.log(`USERNAME: ${this.username}`);
    
   }
   static createId(){
       return`1234`
   }
}

const rohit = new User ("ROHIT")
//console.log(rohit.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher ("iphone", "i@phone.com")
console.log(iphone.createId);

const User = {
    _email: 'r@rana.com',
    _password:'abc123',

    get email(){
        return this._email.toUpperCase();
    },

    set email(newEmail){
        this._email = newEmail;
    }
}

const tea = Object.create(User);
console.log(tea.email); 
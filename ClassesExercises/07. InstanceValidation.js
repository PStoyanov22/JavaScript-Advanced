class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }
    get clientId(){
        return this._clientId;
    }
    set clientId(value){
        if(!/^\d{6}$/g.test(value)){
            throw new TypeError('Client ID must be a 6-digit number')
        }
        this._clientId = value;
    }

    get email(){
        return this._email;
    }
    set email(mail){
        if(!/^[\dA-Za-z]+@[A-Za-z.]+$/g.test(mail)){
            throw new TypeError('Invalid e-mail')
        }
        this._email = mail;
    }

    get firstName(){
        return this._firstName;
    }
    set firstName(name){
        if(name.length < 3 || name.length > 20){
            throw new TypeError('First name must be between 3 and 20 characters long')
        }
        if (!/^[A-Za-z]{3,20}$/g.test(name)) {
            throw new TypeError('First name must contain only Latin characters');
        }
        this._firstName = name;
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(name){
        if(name.length < 3 || name.length > 20){
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }
        if (!/^[A-Za-z]{3,20}$/g.test(name)) {
            throw new TypeError('Second name must contain only Latin characters');
        }
        this._lastName = name;
    }
}
class user{
    constructor(username , pass){
        this.username = username
        this.pass = pass
    }
    get username(){
        return `${this._username.toUpperCase()}`
    }

    set username(value){
        this._username = value
    }
    get pass (){
        // return this._pass.toUpperCase() // here if any user want to get the pass then he will not get the original pass 
        return `${this._pass}ayan` // getter only return something
    }

    set pass(value){
        // this._pass = value.toUpperCase()
        this._pass = value // store actual value in database
        //setter does not return anything
    }
}

const ayan = new user("Ayan" , "abc")
console.log(ayan.pass);
console.log(ayan.username);
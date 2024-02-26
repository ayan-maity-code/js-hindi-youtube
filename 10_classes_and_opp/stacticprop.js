class user{
    constructor(username){

        this.username = username
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
    }
    static createId(){ // stactic does not give access to create unique id
        // console.log("123");
        return `Id is : ${Math.random()}`
    }
}

const chai = new user("ayan")
// console.log(chai.createId()) // does not access the createId 

class teacher extends user{
    constructor(username , email , pass){
        super(username) 
        this.email = email
        this.pass = pass
    }

    
}

const ayan = new teacher("ayan" , "a@gmail.com")
// ayan.createId() // does not access the createId 

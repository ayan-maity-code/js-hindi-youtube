class user{
        constructor(username){

            this.username = username
        }

        logMe(){
            console.log(`Username is : ${this.username}`);
        }
}

class teacher extends user{
    constructor(username , email , pass){
        super(username) // super keyword refer the user calss and get access the user username
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher("Ayan" , "s@gmail.com" , "123")
chai.addCourse()
chai.logMe()

const me = new user("Ayan" )
me.logMe()

console.log(chai instanceof teacher);
console.log(chai instanceof user);
console.log(me instanceof user);
console.log(me instanceof teacher);
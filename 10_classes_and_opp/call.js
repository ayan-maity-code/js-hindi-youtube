function setUserName(username){
        this.username = username
}

function createuser(username , email , pass){
    // setUserName(username) // --> not holding the reference because this does not understand which function it is holding
    setUserName.call(this,username) // holding the reference
    this.email = email
    this.pass = pass
}


const chai = new createuser( "Ayan" , "a@gmail.com" , "123")
console.log(chai);
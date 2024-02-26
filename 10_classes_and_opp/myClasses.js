//ES6

// class user{
//     constructor(username , email , pass){
//         this.username = username
//         this.email = email
//         this.pass = pass
//     }

//     encryptPassword(){
//         return `${this.pass}abc`
//     }
//     changeUserName(){
//     return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("ayan" , "a@gamil.com" , "123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


// behind the scence not using classes

function User(username , email , pass){
        this.username = username
        this.email = email
        this.pass = pass
}

User.prototype.encryptPassword = function(){
    return `${this.pass}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("ayan" , "a@gamil.com" , "123")
console.log(tea.encryptPassword());
console.log(tea.changeUserName());


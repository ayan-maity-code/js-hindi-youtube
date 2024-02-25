const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){  // constructor(here constructor is user)
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true) // new does not change the reat data base it creates a copy and all changes done on the copy
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);


// notes for new keyword
/*
step1 - first empty object created called instance
step2 - constructor function called for the new keyword and arguments packed into it and give to the programmer
step3 - arguments inject into this key word
step4 - then return in the inside of the function

*/


// fetch() notes
/*


*/
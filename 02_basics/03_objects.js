// singleton
//when we declare it with literals no singleton made  but when we declare it with constructor then singleon is made ( interview questions)

const mySym = Symbol("key1")
// method to declare object ( with literals)
const jsUser = {
    name : "Ayan", // keys : values here all keys consider as string
    "full Name" : "Ayan Maity",
    [mySym] : "key1", // correct syntax to using as symbol
    age : 18 ,
    location : "West Bengal",
    email : "ayanmaity309@gmail.com" , 
    isLoggedIn : false, 
    lastLoggedInDays : ["Monday" , "Saturday"]

}

// two method for accessing object
console.log(jsUser.email)// 1st method(mostly used) . here with dot method no double cotation required.
console.log(jsUser["email"])// 2nd method (it is more better than 1st method) . email consider as string so we have to define under double cotation for this method

// console.log(jsUser.full Name) not accessible  with dot operator

console.log(jsUser["full Name"]) // accessible with squar bracket operator

console.log(jsUser[mySym])
console.log(jsUser["age"])

// method to overwrite the values in object

jsUser.email = "Ayanmaity800@gmail.com"
console.log(jsUser["email"])

// method to freeze(not cahnge) any values in object 
// Object.freeze(jsUser)
jsUser.email = "Ayanmaity80@gmail.com" // not throw any error
console.log(jsUser) // no change in email

jsUser.greeting = function(){
    console.log("Hellow World")
}

jsUser.greetingTwo = function(){
    console.log(`Hello , ${this.name}`) // from " " --> `` known as string interpolation . it is used to reference the keys in ssme objects
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
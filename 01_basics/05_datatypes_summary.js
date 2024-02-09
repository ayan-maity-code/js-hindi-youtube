// # premitivr data types
// 7 types : undefined , null , number , string , boolean , BigInt, symbol


// reference(non premitive)
//Arrya , function , object 

 /* const id = Symbol('123')
const anotherId = Symbol('123') // symobl used to define the uniqueness
console.log(id === anotherId)

const heros = [ 'shaktiman' , 'naagraj' , 'doga']
 let myObj ={
    name: "Ayan",
    age : 21,  // { object declared in curly braces }
 }

 const myFunction = function(){
    console.log("Hello World")
} 
// return of function will be function 
*/
//++++++++++++++++++++++++++++++ Memory
//stack(premitive) , heap(non premitive)

/*  let myName = "Ayan"
let anotherName = myName
anotherName = "Ayan Maity" 
console.log(myName)
console.log(anotherName)  */

let myDetailsOne = {
    name: "Ayan",
    email : "Ayan@gmail.com"
}

let myDetailsTwo = myDetailsOne;
myDetailsTwo.email = "ayanmaity@gmail.com"
console.log(myDetailsOne.email)
console.log(myDetailsTwo.email)
// # premitivr data types
// 7 types : undefined , null , number , string , boolean , BigInt, symbol


// reference(non premitive)
//Arrya , function , object 

const id = Symbol('123')
const anotherId = Symbol('123') // symobl used to define the uniqueness
console.log(id === anotherId)

const heros = [ 'shaktiman' , 'naagraj' , 'doga']
 let myObj ={
    name: "Ayan",
    age : 21,  // { object declared in curly braces }
 }

const myFunction /* function name */= function(){
    console.log("Hello World")
}
// return of function will be function
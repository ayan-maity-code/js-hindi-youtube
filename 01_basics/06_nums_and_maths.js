//++++++++++++++++++++++ Number ++++++++++++++
const score = 300
/* console.log(score)

const balance = new Number(100) // specify number type
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2)) // toFixed() show the decimal value precision like 10.00
const otherNumber = 123.8967
console.log(otherNumber.toPrecision(4)) // toPrecision() gives priority before the decimal number 

const anotherNumber = 100000000
console.log(anotherNumber.toLocaleString())
console.log(anotherNumber.toLocaleString('en-IN'))  */

//++++++++++++++++++++++ Maths ++++++++++++++++
/* console.log(Math) // print this on console 
console.log(Math.abs(-4)) // abs => absolute value , negative sign change to positive sign but poitive doesn't change to negative 
console.log(Math.abs(4))

console.log(Math.round(4.2)) 
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.sqrt(26))
console.log(Math.min(4,6,7,9))
console.log(Math.max(4,7,8,9)) */

//note : mostly Math library used in Math.random

console.log(Math.random()) // the value of math.random lies b/w  0 - 1 
console.log((Math.random()*10) + 1) // we are using +1 because the value will be <= 1 not 0.000 or 0.something 
console.log(Math.ceil(Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20
// if we want minimum number will be more than 10 so the below formula is used
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // return more than 10 number because we add min(10)
console.log(Math.floor(Math.random() * (max - min + 1)) + max) // return more than 20 number because we add max(20)




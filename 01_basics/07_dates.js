let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(typeof myDate) //object

//another way to declare date 

// let myNewDate = new Date ( 2024 , 7 , 16)
// console.log(myNewDate.toDateString())

// let myNewDate = new Date ( 2024 , 7 , 16,5,15,20)
// console.log(myNewDate.toLocaleString())

//let myNewDate = new Date ("2024-03-16") //yy-mm-dd
let myNewDate = new Date ("04-14-2024") //mm-dd-yy
console.log(myNewDate.toLocaleString())

// compare dtaes with mili sec

let newTimeStamp = Date.now()
console.log(newTimeStamp)
console.log(myNewDate.getTime())


console.log(myNewDate.getDate())

// to get time in sec

console.log(Math.floor(Date.now()/1000)) // no decimal value

let newDate = new Date()
console.log(newDate.getFullYear())
console.log(newDate.getMinutes())
console.log(newDate.getMonth() + 1) // start from zero so we add one to get the exact month because in js month start from 0

//customize localestring

myNewDate.toLocaleString('default' , {
 weekday:"long"
})

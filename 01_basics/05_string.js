const name = "Ayan" // 1st way to declare string
const repoCount = 50

// console.log(name + repoCount) ---> Outdated not used in modern js

// modern way to add string
console.log(`My name is ${name} and my repo count is ${repoCount}`)

// another way to declare string
const myName = new String('Ayan-Mai-ty')

//string methods
console.log(myName[0])
console.log(myName[1])
console.log(myName[2])

console.log(myName.__proto__)

console.log(myName.length)
console.log(myName.toUpperCase()) //it doesn't change the actual string
console.log(myName)//no change because of stack memory allocation

console.log(myName.charAt(2))
console.log(myName.indexOf('n'))

/* const newName = myName.substring(0,3)
console.log(newName) */

const anotherName = myName.slice(-7,4) // in slice we can use negative number
console.log(anotherName)


const trimName = "   Ayan   "
console.log(trimName)
console.log(trimName.trim()) // trim() remove whitespaces


const url ="https://ayanmaity.com%20gmail.com"
console.log(url.replace('%20','-')) // replace used to replace any string and adda new string
console.log(url.includes('ayan'))
console.log(url.includes('sundar')) // inclues reurn true or flase if the string is present or not present. 
console.log(myName.split('-'))


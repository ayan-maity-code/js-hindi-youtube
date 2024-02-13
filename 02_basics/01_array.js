const myArr = [0 , 1 , 2 , 3 , 4 , 8 , 7]
const myHeros = ["nagarjuna","naagraj"]
const myArr2 = new Array(1 , 2 , 3) // another method to declare array
console.log(myArr[3])
console.log(myArr2[2])

// add element into the array
myArr.push(6)
console.log(myArr)

myArr.pop() // pop () remove the lat element from the array

myArr.unshift(9) // shift the array element and add 9 into first position
console.log(myArr)
myArr.shift() // shift the first element
console.log(myArr)

// to find if any element is present in the array or not the below function is used
const elementPreset = myArr.includes(9)
console.log(elementPreset)
console.log(typeof elementPreset) // boolean

// to get the index
console.log(myArr.indexOf(3))

//***

const newArr = myArr.join() // join change the array type to string type
console.log(myArr)
console.log(newArr)
console.log(typeof myArr) // object
console.log(typeof newArr) // string

// +++++++++++++++ important for interview 
//slice , splice

const myn1 = myArr.slice(1,3)
console.log("A" , myArr)
console.log( myn1)

const myn2 = myArr.splice(1,3) // splice manupulate the original array . . it remove the portion from 1 to 3 and remain element in the array will be same .
console.log(myn2)

console.log("B",myArr) // change the original array




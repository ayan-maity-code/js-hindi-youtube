// const coding =[ "python", "java" , "cpp"]

// const result = coding.forEach((items) =>{
//     console.log(items);
//     return items
// })

// console.log(result); // it doesn't return any value

//filter(which return value)
const nums = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// const newNums = nums.filter((nums) => nums > 4) // implicit return
// const newNums = nums.filter((nums) =>{
//     return nums>4 // explicit return
// })
// console.log(newNums);

//return value method for  forEach loop
const newNums = []
nums.forEach((values) => {
    if(values > 4){
        newNums.push(values)
    }
})
console.log(newNums);


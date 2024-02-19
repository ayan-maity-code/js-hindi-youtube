const myNums = [ 1 , 2 , 3 ]

// const myTotal = myNums.reduce(function (accumulator , currentVal) {
//     console.log(`Accumulator: ${accumulator} CurrentValue : ${currentVal}`);
//    return accumulator + currentVal
    
// }, 2)


const myTotal = myNums.reduce((acc , currval) => (acc+currval) , 0)
// console.log(myTotal);

const shoppingCart = [
    {
        courseName : "python",
        price : 999
    },
    {
        courseName : "c++",
        price : 1999
    },
    {
        courseName : "mobile dev",
        price : 2999
    }
]

const priceToPay = shoppingCart.reduce((acc , items) => acc + items.price , 0)
console.log(priceToPay);
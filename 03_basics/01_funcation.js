function syMyName (){
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
}

// syMyName()

/* function addTwoNumbers (num1 , num2){
    console.log(num1 + num2)
}

const result = addTwoNumbers(2 , 3)
console.log(typeof result) // undefined  */


function addTwoNumbers (num1 , num2){ // num1 and num2 is known as parameters
    // const result = num1 + num2
    // return result
//another method 
    return num1 + num2

}
const result = addTwoNumbers(3 , 4) // (3 ,4 ) known as arguments
// console.log("result = " , result , typeof result)

function userLoggedinMsg(username){

    // return `${username} Just loggedin`

    // if(username === undefined){
    //     console.log("Please enter a username")
    //     return
    // }

    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} Just loggedin`
}

// console.log(userLoggedinMsg("Ayan"));

//********* interview question     if we don't pass any user anme  then the return msg will be "Undefined" not null . . see below -->
// console.log(userLoggedinMsg());

function userLoggedinMsg(username = "sam"){

    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} Just loggedin`
}
// console.log(userLoggedinMsg("ayan"));
// console.log(userLoggedinMsg());



// function calculateCartPrice (num){
//     return num
// }
// console.log(calculateCartPrice(2));

//******* if the cart price is more than 2 then the below code will be suitalbe

// function calculateCartPrice (...num){ // here "..." is known as rest operator because it is using in the function
//     return num
// }
// console.log(calculateCartPrice(200 , 300 , 400));


function calculateCartPrice (val1 , val2 , ...num){ 
    return num
}
// console.log(calculateCartPrice(200 , 300 , 400 , 500)); // here val1 take 2000 & val2 take 300 and the rest numbers will be taken by num and return it as an array

const user = {
    username : "Ayan",
    price : 199
}

function handleObject (anyobject){
    console.log(`"User name is " ${anyobject.username} and "price is " ${anyobject.price}`)
}
// accessing from user object
// handleObject(user)

//value is providing in function arguments as object
// handleObject({
//     username : "Maity",
//     price : 299
// })


// value as array
const myNewArray = [ 200 , 3000 , 4000 , 500]

function getSecondElement (getarray){
    return getarray[2]
}
// console.log(getSecondElement(myNewArray));
console.log(getSecondElement([200 , 300 , 400 ]));

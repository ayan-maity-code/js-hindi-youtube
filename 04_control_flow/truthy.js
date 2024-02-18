const userEmail = []

if (userEmail) {
    console.log("got user email");   
}

else{
    console.log("don't get user email");
}

// falsy values
// false , "" , BigInt 0n , null , undefined , 0 , -0 , NaN

//truthy values
// "false" , " " , "0" , [] , {} , function(){}

// " " --> string with sapce & "" --> empty string

if(userEmail.length === 0){
    console.log("Array is empty" );
}


const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}

// +++++++++++ fro interview 
// false == 0
// true
// false == ''
// true
// 0 == false
// true
// 0 == ''
// true



// Nullish coalescing Operator (??) : null & undefined

// const val1 = 5 ?? 10
// const val1 = null ?? 10
// const val1 = undefined ?? 10
const val1 = undefined ?? 10 ?? 20

// console.log(val1);


// Ternary Operator

// condition ? true : false

let price = 100
price <= 80 ? console.log("price is grater then 80") : console.log("price is less than 80");
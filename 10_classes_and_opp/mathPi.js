// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI) // not change in value

const descriptor = Object.getOwnPropertyDescriptor(Math ,"PI")
// console.log(descriptor);

const chai = {
    name :"ginger chai",
    price : 250,
    isAvailable : true ,

    orderChai : function(){
            console.log("hi! whatsUp");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai , "name"));
// Object.defineProperty(chai , "name" ,{ // by using this we set the hard coded value and no body can change it if he is using this code
    // writable : false,
    // enumerable : false, // it stop the iteration
    // enumerable : true, // it does not stop the ieration
    // configurable : false
// })
// console.log(Object.getOwnPropertyDescriptor(chai , "name"));

for (const [key , value] of Object.entries(chai)) {
    if(typeof value != 'function'){

        console.log(`${key} : ${value}`);
    }
}


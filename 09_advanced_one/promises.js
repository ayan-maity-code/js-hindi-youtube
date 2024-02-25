const promiseOne = new Promise(function(resolve , reject){
        // do any task
        // DB calls , cryptography , network call
        setTimeout(() => {
            console.log("Async task is completed")
            resolve()
        }, 1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve , reject){
    setTimeout( () =>{
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task 2 completed");
})

const promiseThree = new Promise (function(resolve , reject){
    setTimeout(function(){
        resolve({userName : "Ayan" , email : "ayan@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise((resolve , reject) =>{
    setTimeout(function(){
        // const error = true
        const error = false
        if(!error){
            resolve({userName : "Ayan" , email : "ayan@example.com"})
        } else{
            console.log("ERROR : something went wrong");
        }
    },1000)
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.userName
})
.then((userName)=>{
    console.log(userName);
})  // readability
.catch((err)=>{
    console.log(err);
})
.finally(() => 
{  
    console.log("The promise is eiher resolve or rejected")
})

const promiseFive = new Promise((resolve , reject) =>{
    setTimeout(function(){
        const error = true
        // const error = false
        if(!error){
            resolve({userName : "Ayan" , email : "ayan@example.com"})
        } else{
            console.log("ERROR : something went wrong");
        }
    },1000)
})
//another way to handle resolve and reject
async function consumePromiseFive(){
   try {
     
       const response = await promiseFive
      console.log(response)

   } catch (error) {
     console.log(error);
   }
}
consumePromiseFive()

async function getAllUsers(){
    
    try {
        const getUser = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await getUser.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json()
})
.then((data) =>{
   console.log(data);
}).catch(() =>{
    console.log("Error")
})

// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
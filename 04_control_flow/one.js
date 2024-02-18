// if
// == , === , <= , >= , < , >
// const temperature = 41
// if(temperature === 40){
//     console.log("temp is 40");
// }

// else{
//     console.log('temp is more than 40');
// }

// const score = 200
// if(score>100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`); // not accessible for scope

// const userLoggedIn = true
// const debitCard = true

// if(userLoggedIn && debitCard){
    //     console.log("allow to buy book");
    // }
    
    const loggedInFromEmail = true
    const loggedInFromGoogle = true
    
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("You are logged in");
}

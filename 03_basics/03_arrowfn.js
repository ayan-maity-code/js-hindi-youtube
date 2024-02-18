const user = {
    username : "Ayan",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // this tells current context or values
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Ayan Maity"
// user.welcomeMessage()

// the name of global object in browser is  window (interview question)

// console.log(this);   // we are in node environment . so, this will be empty object like {}.because no global object in node


// function one (){
//    let username = "Ayan"
//     console.log(this);
//     // console.log(this.username); // undefined bcz this context works on object not in function
// }
// one()


// const one = function(){
//    let username = "Ayan"
//     // console.log(this);
//     console.log(this.username); // undefined bcz this context works on object not in function
// }
// one()


//+++++++++ arroe function

const one = () =>{
   let username = "Ayan"
    console.log(this);
    // console.log(this.username); // undefined bcz this context works on object not in function
}
// one()

//++++++++++++++ basic arrow fu^n with explicit return

// const addTwoNum = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwoNum(3 , 4));


// arrow function with implicit return

// const addTwoNum = (num1 , num2) => num1 + num2 // for one line return
// const addTwoNum = (num1 , num2) => (num1 + num2) // for {} need retuen keyword , for () no need return keyword
// console.log(addTwoNum(4,5));

// return an object ({})
const objectReturn= () => ({username:"ayan"})
console.log(objectReturn());
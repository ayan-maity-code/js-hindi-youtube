// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

//(interview question) To remove global scope polution we use IIFE [() ()]and also immediately execute  function 

// named IIFE(question how to write named IIFE)
// (function one(){
//     console.log("Ayan Maity");
// })() ; // semicolon is need to tell the IIFE function to end of the function or context

//unnamed IIFE(question how to write unnamed IIFE)
// ( () => {
//     console.log("Ayan Maity");
// })()

//parameter pssing in unnamed IIFE
( (name) => {
    console.log(`${name}`);
})('ayan')




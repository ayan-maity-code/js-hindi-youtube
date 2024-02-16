// {} --> scope
let a = 300 // global scope and it can be accessed in the scope and ouside the scope
if(true){
    let a =  30 // it can not accessed outside of scope
    const b = 50 
    // var c = 5 --->> avoid var
    console.log("inner value ", a);
}
console.log("Outer value",a);
// console.log(b);
// console.log(c); --->> avoid var


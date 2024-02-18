// {} --> scope
let a = 300 // global scope and it can be accessed in the scope and ouside the scope
if(true){
    let a =  30 // it can not accessed outside of scope
    const b = 50 
    // var c = 5 --->> avoid var

    // console.log("inner value ", a);
}
// console.log("Outer value",a);

// console.log(b);
// console.log(c); --->> avoid var

function one(){

    const username = "Ayan"
    
    function two(){
        const website = "youtube"
        console.log(username) // child can access the parent function
    }

    // console.log(website); // not accessible because parent doesn't access child
    two()
}
// one()

if(true){
    const username = "Ayan"

    if(username === "Ayan"){
        const website = "Youtube"
        console.log(`${username} ${website}`);
    }
    // console.log(website); // not accessible because outside of scope .
}
// console.log(username); // outside of scope


//********** interesting *****************

// console.log(addOne(5) ) // before function declaration it is accessible.
function addOne(num){ 
    return num + 1
}

console.log(addOne(5) ) // after function declaration it is also accessible.

// below is the another type of function declaration by using variable 


// console.log(addTwo(5)) it is not accessible before function for the function declaration using variable

const addTwo = function(num){

    return num + 2
}

console.log(addTwo(5))



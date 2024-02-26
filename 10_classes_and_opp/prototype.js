let myHeros = ["thor" , "spiderman"]

let heroPower = {
    spiderman: "spidy",
    thor : "hammer",
    getSpiderPower : function (){
        console.log(`spiderman power ${this.spiderman}`);
    }
}

Object.prototype.ayan = function(){
    console.log('Ayan is present in all object');
}
heroPower.ayan()
// myHeros.ayan() // object has the power . so the array has the power

Array.prototype.heyAyan = function(){
    console.log(`Ayan says hello`);
}

myHeros.heyAyan()
// heroPower.heyAyan() // array has the power but object does not

// inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport ,Teacher)

let anotherName = "   Ayan Maity    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The true length is : ${this.trim().length}`);
}

anotherName.trueLength()
"Ayan".trueLength()
"Maity".trueLength()
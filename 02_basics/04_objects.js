// object with constructor
// this is called singleton 
const tinderUser = Object() // constructor(singleton object)
// const tinderUser = {} // non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.age = 18

// console.log(tinderUser)

//object in object
const newUser = {
    email: "ayanmaity@gmail.com",
    fullname:{
        userfullname:{
            firstname : "ayan",
            lastname : "maity"
        }
    }
}

// access object in object 

/* console.log(newUser.fullname)
console.log(newUser.fullname.userfullname)
console.log(newUser.fullname.userfullname.firstname)
console.log(newUser.fullname.userfullname.lastname) */
// merge two object
const obj1 = { 1:"a" , 2:"b"}
const obj2 = { 3:"c" , 4:"d"}
const obj4 = { 5:"e" , 6:"f"}

// const obj3 = {obj1 , obj2} // not good method it return like { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign(obj1 , obj2) // not right syntax for more than two object . syntactically the obj2 goes to inside  obj1. so, this is not right

// const obj3 = Object.assign({} , obj1 , obj2) // correct method to merge object for more than two object . obj2 not going to inside of  obj1.

// const obj3 = Object.assign({} , obj1 , obj2 , obj4) // here {}(empty object) it uses to define that we are getting an object and the obj2 , obj4 is not going to inside of obj1.
// but mostly used spread (...) operator to merge object 
const obj3 = {...obj1 , ...obj2 , ...obj4} // spread operator to merge object

// console.log(obj3)
// important method for object

console.log(Object.keys(tinderUser)); // get all the keys of tinderUser
console.log(Object.values(tinderUser)); // get all the value of tinderUser keys
console.log(Object.entries(tinderUser));

// to find any values in object 
console.log(tinderUser.hasOwnProperty('name')); // return true / false value


//************* Destructure of object */

const course ={

    courseName : " javascript in hindi",
    price : 999,
    courseInstructor : "ayan"
}

// console.log(course.courseInstructor);  // every time if we want to print the object keys and values we need to write the same code again and again . so , here comes "object destructure" method . destructuring done with curly braces like {}.

const {courseInstructor : instructor } = course // destructure
// console.log(courseInstructor);
console.log(instructor); // courseInstructor is a big name so we assign it to the name of instructor


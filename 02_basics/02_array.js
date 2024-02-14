const marvelHeros = ["ironman" , "spiderman" , "superman"]
const dcHeros = ["batman" , "thor"]

/* marvelHeros.push(dcHeros) // it return the same array and another array will not merge but it join the whole array as an element like [ 'ironman', 'spiderman', 'superman', [ 'batman', 'thor' ] ]
console.log(marvelHeros)

const allHeros = marvelHeros.concat(dcHeros) // concate merge the whole array and the 2nd array not consider as element but the all element of 2nd array will be merge with first array like [ 'ironman', 'spiderman', 'superman', 'batman', 'thor' ]
console.log(allHeros) */

// +++++++++ spread operator(...)

const all_heros = [...marvelHeros , ...dcHeros]
console.log(all_heros)

// flat remove arry which is within the array and amke individual element 
const anotherArray = [ 2 , 3 , 4 , [ 5, 6, 7 ] , 6 , [2 , 3 ,[ 6 , 8]]]
const real_anotherArray = anotherArray.flat(Infinity)
console.log(real_anotherArray)

console.log(Array.isArray("ayan")) // isArray return true or false
console.log(Array.from("ayan")) // from convert it into array
console.log(Array.from({name : "Ayan"})) // return empty array . inersting question of interview


// of operator

const score1 = 100 
const score2 = 200 
const score3 = 300 

console.log(Array.of(score1 , score2 , score3)) // of merge all the elements into an array


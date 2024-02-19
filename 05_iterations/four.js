//for in loop on object
const myObject = {
    cpp : "c++",
    js : "javascript",
}
for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
}

// for in loop on array
const programming = [ "js" , "cpp" , "c"]
for (const key in programming) {
//    console.log(key); // print the index number of array
    // console.log(programming[key]);
}

// for in on map(not applicable )
const map = new Map()
map.set("IN", "INDIA")
map.set("usa", "united states")
// console.log(map)

for (const key in map) {
    // console.log(key); // doesn't print anything 
}
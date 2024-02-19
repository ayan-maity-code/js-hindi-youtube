// for of loop

const Arr = [ 1 , 2 , 3 , 4]
for(const num of Arr){
    // console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    if(greet === " "){
        continue
    }
    // console.log(greet);
}

// Map
//for of loop on map

const map = new Map()
map.set("IN", "INDIA")
map.set("usa", "united states")
// console.log(map)

for (const [key , value] of map) {
    console.log(`${key} :- ${value}`);
}

//for of loop on object

const myGames = {
    game1 : "NFS",
    game2 : "spiderman"
}
for (const [key , value] of myGames) {
    // console.log(`${key} :- ${value}`); // object not iteratable for  for of loop. we have another approach for iterating
}


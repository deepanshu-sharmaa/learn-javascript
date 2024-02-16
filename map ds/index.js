let map = new Map();

map.set('1', 523);
map.set(2, 524);
map.set(true, 23);

console.log(map.size)

console.log(map.get(true))

console.log(map.has('1'))

map.delete(2)

console.log(map)

map.clear()

console.log(map)

console.log(map.size)



// example 2
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);

for (let vegetable of recipeMap.keys()){
    console.log(vegetable);
}

for (let vegetable of recipeMap.values()){
    console.log(vegetable);
}

for (let entry of recipeMap){
    console.log(entry)
}
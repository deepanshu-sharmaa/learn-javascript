let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set)

for (let person of set.keys()){
    console.log(person)
}

// same
set.forEach((value) =>{
    console.log(value);
})
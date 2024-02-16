let obj = { message: "Hello" };
const weakMap = new WeakMap();

// Creating a weak reference
weakMap.set(obj, "Value associated with obj");

// obj is still accessible through the weakMap
console.log(weakMap.get(obj)); // Outputs: Value associated with obj

// Now, let's remove the strong reference to obj
obj = null;

console.log(weakMap.get(obj))
console.log(weakMap.has(obj))

// At this point, obj is not accessible anymore
// If the garbage collector runs, the object may be collected
// (Note: Garbage collection is non-deterministic and depends on the JavaScript engine)


// const object = { a: 1, b: 2, c: 3 };

// for (const property in object){
//     console.log(property, ":", object[property])
// }



// const array1 = ['a', 'b', 'c'];
// for (const ele of array1){
//     console.log(ele);
// }

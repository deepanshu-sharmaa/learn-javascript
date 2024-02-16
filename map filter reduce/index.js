const arr = [5, 1, 3, 2, 6]

// function binary(x){
//     return x.toString(2);
// }
// const output = arr.map((x) => x.toString(2));
// console.log(output);



// const output = arr.filter((x) => x%2);
// console.log(output);



function findSum(arr){
    let sm = 0;

    for (let i = 0; i < arr.length; i++) {
        sm += arr[i];
    }

    return sm;
}

console.log(findSum(arr));

const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0)
console.log(output);

function findMax(arr){
    let mx = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++) {
        if (mx < arr[i]){
            mx = arr[i];
        }
    }
    return mx;
}

console.log(findMax(arr))

const outpt = arr.reduce(function(acc, curr){
    if (acc < curr){
        acc = curr;
    }
    return acc;
}, Number.MIN_VALUE)
console.log(outpt)
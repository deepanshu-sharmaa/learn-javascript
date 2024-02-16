const p1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Promise Resolved Value!!!");
    }, 10000);
})

const p2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Promise Resolved Value!!!");
    }, 15000);
})

// async always returns a promise

// async function getData(){
//     return p;
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));




async function handlePromise(){
    console.log("Hello World")
    const val1 = await p1;
    console.log("Namaste Javascript")
    console.log(val1);

    const val2 = await p2;
    console.log("Namaste Javascript")
    console.log(val2);
}
// await used only inside a async function
handlePromise();


// function getData(){
//     p.then((res) => console.log(res));

//     console.log("Namaste Javascript");
// }

// getData();
// Example - 1
// console.log("Start!");

// setTimeout(function cb() {
//     console.log("Callback")
// }, 5000);

// console.log("End!")



// Example - 2
// console.log("start");
// document.getElementById("btn")
// .addEventListener("click", function cb(){
//     console.log("callback");
// });
// console.log("end");



// Example - 3
console.log("Start");

setTimeout(function cbT(){
    console.log("Callback SetTimeout");
}, 5000);

fetch("https://api.netflix.com")
.then(function cbF(){
    console.log("Callback Netflix");
});

console.log("End");
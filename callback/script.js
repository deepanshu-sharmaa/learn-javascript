// // callback function in JS

// setTimeout(function() {
//     console.log("timer")
// }, 5000);

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// });



// event listener

// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz(){
//         console.log("Button clicked", ++count);
// });



// closure with event listeners
// function attachEventListener(){
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click", function xyz(){
//         console.log("Button clicked", ++count);
//     });
// }
// attachEventListener();



// garbage collection and removeEventListeners
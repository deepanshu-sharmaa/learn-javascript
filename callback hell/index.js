const cart = ["shoes", "pant", "shirt"]

api.createOrder(cart, function(){

    api.proceedToPayment()

})

// importance of callback - to achieve asynchronous operations in JS
// Issues with callbacks -
    // 1. callback hell - callback inside a function and further nesting
    // 2. inversion control - loosing control of the code
    

// 1 - Callback hell
// When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
// This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

// 2 - Inversion of control
// The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
// That process is called inversion of control. 
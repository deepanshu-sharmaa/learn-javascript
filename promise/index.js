// const cart = ["shoes", "pants", "shirts"]

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// })


// // using promises
// const promise = createOrder(cart);

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });



// example - 2
// const GITHUB_API = "https://api.github.com/users/deepanshu-sharmaa";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function(data){
//     console.log(data);
// })


const cart = ["shoes", "pants", "shirts"]

// having inversion of control
createOrder(cart, function(orderId){
    proceedToPayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance();
        });
    });
});

// using promises
createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    return updateWalletBalance(paymentInfo);
})

// also
createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo))
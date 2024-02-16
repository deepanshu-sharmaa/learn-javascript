const cart = ["shirt", "jeans", "t-shirt"]

let walletBalance = 1500;

createOrder(cart)
.then(function(result){
    console.log("order id: " + result.orderId);
    return result;
})
.then(function(result){
    console.log(result.status);
    return proceedToPayment(result);
})
.then(function(result){
    console.log(result.status);
    return showOrderSummary(result);
})
.then(function(result){
    console.log(result.status);
    return updateWallet(result);
})
.then(function(result){
    console.log(result.status, result.walletInfo)
})
.catch(function (error) {
    console.error('Error:', error);
});

function createOrder(cart){

    const pr = new Promise(function(resolve, reject){
        if (!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject({ status: "Error", error: err });
        }

        const orderId = "12345";
        if (orderId){
            setTimeout(function(){
                resolve({ orderId: orderId, status: "Order Created" });
            }, 5000);
        }
    });

    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        if (walletBalance >= 500){
            resolve({ status: "Payment Successful" });
        }
        else{
            reject({ status: "Error", error: "Insufficient Balance" });
        }
    })
}

function showOrderSummary(orderId){
    return new Promise(function(resolve, reject){
        resolve({status:"Order summary displayed"});
    })
}

function updateWallet(orderId){
    return new Promise(function(resolve, reject){
        walletBalance -= 700
        resolve({
        walletInfo: { currentBalance: walletBalance }, status: "Wallet Updated"});
    })
}

function validateCart(){
    return true;
}
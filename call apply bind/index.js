let name = {
    firstName : "Deep",
    lastName : "Sharma",

    // not kept like this inside the object
    // printFullName: function(){
    //     console.log(this.firstName + " " + this.lastName);
    // }
}
// name.printFullName();

let printFullName = function(hometown, state){
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}

printFullName.call(name, "Gajraula", "UP");

let name2 = {
    firstName: "Sachin",
    lastName: "Nawani"
}

// function borrowing
printFullName.call(name2, "Mumbai", "MH")

printFullName.apply(name2, ["Mumbai", "MH"])

// bind method
let printMyName = printFullName.bind(name2, "Mumbai", "MH");
console.log(printMyName)
printMyName()
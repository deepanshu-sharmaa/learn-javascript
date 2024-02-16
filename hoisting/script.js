console.log(x);
console.log(getName);
console.log(getName());
console.log(getName2);
console.log(getName2());

var x = 7;

function getName(){
    console.log("Namaste Javascript");
    return;
}

var getName2 = () => {
    console.log("Namaste Javascript! 2");
}

console.log(x);
console.log(getName);
console.log(getName());
console.log(getName2);
console.log(getName2());
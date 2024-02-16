console.log(x); //undefined
console.log(getName); //whole function code
getName(); //Namaste JavaScript!
console.log(getName2); //undefined
getName2(); //getName2 is not a function

var x = 7;

function getName(){
    console.log('Namaste JavaScript!');
    return;
}

// arrow function 
var getName2 = () => {
    console.log('Namaste JavaScript 2!');
} // this function behaves just like variable and undefined is assigned in the memory creation phase and is assigned during the code execution phase

console.log(x); //7
console.log(getName); //function definition
getName(); //Namaste JavaScript!
console.log(getName2); //function definition
getName2(); //Namaste JavaScript 2!
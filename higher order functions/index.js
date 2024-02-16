// function x(){
//     console.log("Namaste");
// }

// function y(x){
//     x();
// }

// y(x);

const radius = [3,2,1,4];

const area = function(radius){
    return Math.PI * radius * radius;
}

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function(radius){
    return 2 * radius;
}

Array.prototype.calculate = function(logic){
    const output = [];

    for (let i = 0; i < this.length; i++){
        output.push(logic(this[i]));
    }

    return output;
}

// same as above function
console.log(radius.map(area));
console.log(radius.calculate(area))

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// const calculateArea = function(){
//     const area = [];

//     for (let i = 0; i < radius.length; i++){
//         area.push(Math.PI * radius[i] * radius[i]);
//     }

//     return area;
// }

// console.log(calculateArea(radius));

// const calculateCircum = function(){
//     const circums = [];

//     for (let i = 0; i < radius.length; i++){
//         circums.push(2 * Math.PI * radius[i]);
//     }

//     return circums;
// }

// console.log(calculateCircum(radius));

// const calculateDiameter = function(){
//     const diameters = [];

//     for (let i = 0; i < radius.length; i++){
//         diameters.push(2 * radius[i]);
//     }

//     return diameters;
// }

// console.log(calculateDiameter(radius));
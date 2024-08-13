const score = 1000

const num = new Number(100)
console.log(score) // 1000
console.log(num) // 100

console.log(num.toString().length); //3
console.log(num.toFixed(2)); // 100.00

const otherNum = 132.7623

console.log(otherNum.toPrecision(4)); // 132.8
console.log(otherNum.toPrecision(3)); // 133

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN')); // In indian way repersantation of number 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++   Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-1)); // 1
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(5.5)); // 6 
console.log(Math.floor(4.9));// 4 
console.log(Math.min(1,2,3,4,5,6)); // 1
console.log(Math.max(1,2,3,4,5,6)); // 6
console.log((Math.random()*10) + 1); // any random between 1 and 9


const min = 10
const max = 20

console.log(Math.floor((Math.random()*(max-min+1)) + 1)  + min ); //  formula  -> random but in the range ->10 to 20 








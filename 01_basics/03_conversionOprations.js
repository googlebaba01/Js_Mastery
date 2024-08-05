let score = "33abc"

console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// 33 => 33
// 33abs => NaN
// true => 1 

let isLoggedIn = 1

let boolisLoggedIn = Boolean(isLoggedIn)

console.log(boolisLoggedIn)
console.log(typeof boolisLoggedIn)

// 1 => true , 0 => false
// "" => false
// "hitesh" => true

/****************************Operations*******************************/
console.log("1" + 2); // => 12
console.log(1 + "2"); // => 12
console.log(1+2 +"2"); // => 32
console.log("1" + 2+2); // =>122

console.log(+true); // => 1
console.log(+""); // => 0

let gameCounter = 100
gameCounter++ // => 101
++gameCounter // 102
console.log(gameCounter);

// Compression 

console.log("2" > 1); // true
console.log("02">1); // true

console.log(null > 0); // false
console.log(null == 0);//false
console.log(null >= 0); // true => it converts null  to zero 
// these are not best practices so avoid it write clean code only 




















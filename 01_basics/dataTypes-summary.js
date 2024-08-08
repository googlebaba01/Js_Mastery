// two types of dataTypes 
// primittive -> pass by value
// 7 -> string , boolean , null , undefined , number , symbol,BigInt
//  you are champ i thing not need to explain about it 



// NonPrimittive -> pass by referance 
// arrays , objects , functions 
// 1. Arrays 
const heros = ["andy" ,"carlo" ,"victor" ,"sara"]
// 2. objects 
let myObj = {
    name :"scout",
    age:27,
    profession:"gaming"
}
// 3. functions
let myFunc = function(){
    console.log("Hello Scout");   
}
console.log(myFunc);



// *********** 

// Primitive Data Type (Call by Value) => 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt. 
// 1) The data type of null is an object.
// 2) The data type of String is a string.
// 3) The data type of Boolean is Boolean.
// 4) The data type of Undefined is undefined.
// 5) The data type of Symbol is a symbol.
// 6) The data type of Number is number.
// 7) The data type of BigInt is BigInt.
// And the Data Types of Non primitive data type is Function object.

// ********************************************************
// Memory and Threads 
// two types of memory 
// 1.satck memory(pass value) 2. heap memory (pass referance)

//  example of pass by value -> satck

let Name = "Gaurav"
let AnotherName = Name
AnotherName = "sahil"

console.log(AnotherName); // -> sahil
console.log(Name); // -> Gaurav coz change in copy not in main item

// examlpe pass by referance -> heap 

let userOne = {
    name:"Gaurav",
    email:"gaurav@google.com",
    upi:"gaurav@paytm"
}

let userTwo  = userOne
userTwo.email = "rahul@gmail.com"

console.log(userOne.email); // -> rahul@gmail.com
console.log(userTwo.email); // -> rahul@gmail.com" pass by referance 











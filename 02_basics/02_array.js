const marvel_heros = ["ironman" , "thor","Spiderman"]
const dc_heros = ["batman" , "superman" ,"flash"]

// marvel_heros.push(dc_heros)   // push works on existing aaray 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // we need to find batman -> but this is not a good practice

// concat -> give us a new array of combination of bith arrays 
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros); // [ 'ironman', 'thor', 'Spiderman', 'batman', 'superman', 'flash' ]

// spread Operators  -> best practice 

const all_heros_by_spread = [...marvel_heros,...dc_heros] // good practice 


let another_arr = [1,2,3,[4,5,6],6,7,[5,6,[6,7,8]]]

let new_another_arr = another_arr.flat(Infinity) // flat 
console.log(new_another_arr); 
 /* [
    1, 2, 3, 4, 5, 6,
    6, 7, 5, 6, 6, 7,
    8
  ] */


// important case 

console.log(Array.isArray("googlebabe")); // false 
console.log(Array.from("googlebabe")); 
/*[
    'g', 'o', 'o', 'g',
    'l', 'e', 'b', 'a',
    'b', 'e'
  ] */
console.log(Array.from({name:"googlebabe"})); // you need to give , what array you want to show like keys or values 

const a = 1000
const b = 2000
const c = 3000
const d = 4000

console.log(Array.of(a,b,c,d)); // sometimes your need this 


















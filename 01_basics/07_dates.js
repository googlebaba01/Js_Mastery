let myDate = new Date()
console.log(myDate); // 2024-08-13T18:51:57.316Z this format 
console.log(myDate.toString()); //  Tue Aug 13 2024 18:51:57 GMT+0000 (Coordinated Universal Time) this format
console.log(myDate.toISOString()); // 2024-08-13T18:51:57.316Z 
console.log(myDate.toJSON()); // 2024-08-13T18:51:57.316Z same as toISOString
console.log(myDate.toLocaleDateString()); // 8/13/2024 -> mm/dd/yyyy
console.log(myDate.toLocaleString()); // 8/13/2024, 6:51:57 PM
console.log(myDate.toDateString()); // Tue Aug 13 2024

let freeDate = new Date(2023,0,13)
let freeDate2 = new Date(2023,0,13,5,3)
// in single months start from zero coz it is a aaray 
console.log(freeDate); // 2023-01-13T00:00:00.000Z
console.log(freeDate2); // 2023-01-13T05:03:00.000Z

let newDate = new Date("2024-01-15") // we can write mm/dd/yyyy
console.log(newDate);

let timeStamp = Date.now() /// for quizes and games 
console.log(newDate.getTime());
console.log(timeStamp);
console.log(Math.floor(timeStamp/1000)); // time in sec


let nDate = new Date()

console.log(nDate.toLocaleString('default' ,{
    weekday:"long"
})); // we use it in corporate  mostly 









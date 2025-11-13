// Dates

let myDate = new Date()
console.log(myDate.toString());  //Thu Nov 13 2025 08:37:25 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Thu Nov 13 2025
console.log(myDate.toLocaleString()); // 11/13/2025, 8:37:25 AM
console.log(myDate.toLocaleDateString()) // 11/13/2025
console.log(myDate.toLocaleTimeString()) // 8:37:25 AM
console.log(typeof myDate);  // object
console.log(myDate.toISOString()) // 2025-11-13T08:37:25.956Z
console.log(myDate.toJSON())  // 2025-11-13T08:37:25.956Z

let myCreatedDate0 = new Date(2025, 0, 23)//
// In JS month starts from  0 = January
let myCreatedDate1 = new Date(2025, 0, 23, 5, 3)
let myCreatedDate2 = new Date("2025-01-14") // Format:-yyyy-mm-dd
let myCreatedDate = new Date("01-14-2025") // Format:-mm-dd-yyyy
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); 
// Divide by 1000 To convert millisec into sec.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); 
// Because month starts from 0 in JS
console.log(newDate.getDay());

`${newDate.getDay()} and the time `
// String Interpolation means ` `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
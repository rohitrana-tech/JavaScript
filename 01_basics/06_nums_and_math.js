const score = 400 
// Here JS automatically assign 400 as number 
 console.log(score);

const balance = new Number(100) 
// Here we explicitly define the datatype is number
 console.log(balance);

console.log(balance.toString().length);
// Here Firstly it get converted into string and then we check the length of string.

console.log(balance.toFixed(1));
// Use to show fixed value after point. Ex:- 100.0 

const otherNumber = 123.8966
// To give precise length string.
 console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++
                                            
console.log(Math);
console.log(Math.abs(-4)); 
// Absolute Value :- -ve value converted into +ve value.

console.log(Math.round(4.6)); 
// To give roundof value output:- 5
console.log(Math.ceil(4.2));
 // To choose greater value then actual value
console.log(Math.floor(4.9));
// To choose smaller value then actual value 

console.log(Math.min(4, 3, 6, 8));
// To find minimum value 
console.log(Math.max(4, 3, 6, 8));
// To find maximum value 

console.log(Math.random()); 
// Random will always give ranom values b/w 0 and 1
console.log((Math.random()*10) + 1); 
// * and + happen to get value greater then one to nine .
console.log(Math.floor(Math.random()*10) + 1);
// Math.floor use to roundof at minimum value. 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// Done all this to get the random values in the range of min and max .
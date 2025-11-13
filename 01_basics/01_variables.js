const accountId = 2203330100136  
// const is use to declare constant. const are remain unchanged.
let accoutEmail = "rohitrana@gmail.com" 
// let is use to declare variable values .
var accountPassword = "987977j!" 
/* 
Prefer not to use var because it have an issue in block scope and functional scope
 means:- if by mistake  you use two similar variable for different task . 
 So, somehow you changed in one variable values of other variables also get changed.   
*/
accountCity = "Hapur"
// In js we can reserve memory even without declaring the datatype but it not good practice .

let accountstate ; 
// In js if we don't initalize the varible then it will give you undefined.

//  accountId = 987977
accoutEmail = "rana@gmail.com"
accountPassword = " 245101"
accountCity = "Ghaziabad"
console.log(accountId);

console.table([accountPassword, accoutEmail, accountCity,accountstate])
// Use console.table if we need to print multiple output in one .
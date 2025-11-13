// Ist way to declare String.

const name = "Rohit"
const repoCount = 18

 console.log(name + repoCount + " Value");
 // Outdated method to add two strings.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// 2nd way to declare String 

const gameName = new String('RohitRana')

 console.log(gameName[0]); 
 // For accessing key value pair.

console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase());
// To convert string into UpperCase

console.log(gameName.charAt(3));
// To find which character is on the given position.

console.log(gameName.indexOf('a')); 
// TO get the index of character in string.

const newString = gameName.substring(0, 4)
console.log(newString);
// Printing String character from 0 to 3 index and excluding 4.

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Rohit    "
console.log(newStringOne);
console.log(newStringOne.trim());
// TO trim the extra space before and after the string.

const url = "https://Rohit.com/Rohit%20choudhary"

console.log(url.replace('%20', '-'))
// Replacing '%20' with '-' 

console.log(url.includes('Rana'))
// To know whether this word present in the url or not . 

console.log(gameName.split('-'));
// To split the String on the any basis . 
// In thisone we split it on the basis of '-' and give the output in array form.






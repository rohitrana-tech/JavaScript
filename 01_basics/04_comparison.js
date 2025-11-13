console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


 console.log("2" > 1);  // True
 console.log("02" > 1);  // True

// It is good practice to Compare same datatyed element.
// In above statements we compare string with Integer . 
// Which is not good programming practice. 

console.log(null > 0); // False
console.log(null == 0); // false
console.log(null >= 0); // True
/*Reason :- Comparison and Equality work differently. 
 Comparison convert null to number , Treating it as zero.
 So , (>= ) is true and (==) is false.
 */

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === It is use to check datatype are same or not 

console.log("2" === 2); // False
// Here one is having string datatype and other one is Integer.
const Arr = [0, 1, 2, 3, 4, 5]
// Array in JS are resizable and can contain a mix of data types.

/* Js array copy operation create shallow copies. 
Shallow Copies:- It is a copy whose properties share the same reference point.
Same Reference Point:- If we change something in secondary array then 
it will also change in original array. */

const superheros = ["Batman", "Ironman", "Spiderman", "Thor"]
//console.log(superheros)

// Another way to declare Array.
const myArr = new Array(1, 2, 3, 4, 5)

// Array Methods 

Arr.push(8) // To push a new element to the array
Arr.pop() // To pop the element from last.
console.log(Arr)

Arr.unshift(9) // Push an elememt to the start of array
Arr.shift() // Remove element from start of an array
console.log(Arr)

console.log(myArr.includes(9));
// For checking the number is included in the array or not.
console.log(myArr.indexOf(3));
// To know the index of any number.

const newArr = Arr.join()
// join combine the values in coma seperated form and change the values type into String.

console.log(Arr)
console.log(typeof newArr)

const marvel = ["Thor", "Ironman", "Spiderman", "Hulk"]
const DC = ["Batman", "Superman", "Flash" ]

//marvel.push(DC)
//console.log(marvel);
// Here we got array inside array as output not a good programming practice.

//const All = marvel.concat(DC)
//console.log(All)

const All_Heros = [...marvel, ...DC]
// Spread operator:- Use spread operator which combines two array in one by spreading both arrays.
//console.log(All_Heros)

const Arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]

const Real_Arr = Arr.flat(Infinity)
//console.log(Real_Arr);


console.log(Array.isArray("Rohit"))
console.log(Array.from("Rohit"))
// From convert the string into array by seperating each character.

console.log(Array.from({name: "Rohit"}))
// Here we need to define key or value means what we want to convert. 
// if we directly print console.log then it will give empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
// To convert the spreated number into array in one go

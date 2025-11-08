let score = 33 // type of score is number

// Two ways to check of type of any variable
console.log(typeof score);
console.log(typeof (score)); // Method

let newscore = "55" // type of new score is string
console.log(typeof newscore);

// To convert the above string into number 

let value = Number(newscore)
console.log(typeof value);
/* we converted string to number 
but there is a catch here if we typed "55abc" 
which is not a number currently 
still give the output that it is number. 
But if we do console.log then it will give 
output as NaN(Not a Number).*/


// conversion into number 

// "55 " => 33 convert easily in number
// "55abc" => Type of this is number but output=NaN.
// true => 1; false => 0
// null = 0
// undefined = NaN.

/* If there is any string like 
"Rohit" then it gives output as NaN. */

//conversion into boolean
let isLoggedIn = 1

let boolean = Boolean(isLoggedIn)
console.log(boolean)

// 1 => true; 0 => false
// " " => false    :- Empty string output 
//"Rohit" => true 

// conversion into string
let someNumber = 98

let string = String(someNumber)
console.log(string)
console.log(typeof string);


// ***************************** Operations *************************

let posvalue = 39
let negativevalue = -value
console.log(negativevalue)

console.log(2+2)
console.log(2-1);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);


let str1 = "Hello"
let str2 = " Rohit"
let str3 = str1 + str2
console.log(str3)


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
// In this Ist number is String and other 2 are Integer 
// so the output will come according to Ist number , Output = 122.
console.log(1 + 2 + "2") // Output = 32.

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

















function myName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
    }

myName()
//myName (Reference) and ()(Execution)

function addTwoNumbers(number1, number2){ // When we make the defination of function then we call it as parameter.(number1, number2) like here we do
      console.log(number1 + number2)
}

function addTwoNumbers(number1, number2){ 
     let result = number1 + number2
     return result
        
    //          OR   

    return number1 + number2

}

const result = addTwoNumbers(17, 29) // At the time of function call the value we pass is called argument (17, 29) like here we do.
console.log("Result : ", result) // Output :- Result : undefined


function loginUserMessage (Username){
     if(Username === undefined){
         console.log("Please enter a username");
         return
         }

    //            OR 


    if(!Username){
        console.log("Please enter a username");
        return
        }

    return `${Username} is just logged in`

}

console.log(loginUserMessage("Rohit Rana"))
console.log(loginUserMessage()) // output :- undefined 


function loginMessage (username = "Rohit"){
    return `${username} is just logged in `
 
}
console.log(loginMessage());
/* Here if we don't pass any parameter . 
it will give undefined but here username ByDefault = Rohit. 
So, if we don't pass any parameter it will give Rohit as output.
And if we pass any parameter it will override the ByDefault value.*/



function totalCartPrice(...total){
    return total

}
console.log(totalCartPrice(200, 2626, 64, 73, 7834))


const book = {

    bookname: "Meditation",
    price: 350

}

function handleObject(anyobject){

    console.log(`bookname is ${anyobject.bookname} and price of book is ${anyobject.price}`)

}
handleObject({
    bookname : "Rohit",
    price : 999
})


const newArray = [200, 500, 272, 554]
function secondValue(arrayMilGaya){
    return arrayMilGaya[3]

}

console.log(secondValue(newArray))
console.log(secondValue([100, 200, 500, 600, 398, 676]))
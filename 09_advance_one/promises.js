// Creation of promise 
const promiseOne = new Promise(function (resolve, reject) {
 // Do an Async task
 // DB calls, cryptography, network
 setTimeout(function(){
    console.log('Async task is completed')
    resolve()
 },1000)

} )

// Consumption of promise
promiseOne.then(function(){
    console.log('Promise Consumed')
})


new Promise(function(resolve , reject){
    setTimeout(function(){
     console.log('Async task 2')
     resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved')
})


const promiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
     resolve({username: 'Rohit', email: "rohit@example.com" })
   },1000)
})

promiseThree.then(function(user){
 console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
   setTimeout(function(){
    let error = true
    if (!error) {
        resolve({username:'Nishant', passwrod: 'bodybuilder90kgonlyMuscleMass'})
     }else{
        reject('Error: Something went wrong')
     }
   },2000)
})

 promiseFour
 .then((user) => {
   console.log(user);
   return user.username
   
})
.then((username) => {
 console.log(username);
 
})
.catch(function(error){
 console.log(error);
}).finally(() => {
    console.log('The promise is either resolved or rejected');
    
})


const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function(){
    let error = true
    if(!error){
        resolve({username:'JavaScript', passwrod:'12345678'})
    }else{
        reject('ERROR: JS went wrong')
    }
  }, 1000)
})

async function consumePromiseFive(){
  try {
    const response = await promiseFive
  console.log(response);
  } catch (error) {
    console.log(error);
  }
} 
consumePromiseFive()
    

// async function getAllUsers() {
//  try {
//   const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//  const data = await response.json()
//  console.log(data);
  
//  } catch (error) {
//   console.log("E: ", error);
//  }
// }
// getAllUsers()



fetch ('https://api.github.com/users/rohitrana-tech')
.then((response) => {
     return response.json()
})
.then((data) => {
  console.log(data);
  
})
.catch((error) => console.log(error))


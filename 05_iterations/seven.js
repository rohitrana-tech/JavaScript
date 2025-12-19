const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.map((num) => num + 10) // map returns a new array

// const newNums = []
// myNums.forEach((num) => {
//     if ( num = num + 10) {
//         newNums.push(num)
//     }
//     })


// Chaining map and filter or map and map
const newNums = myNums.map((num) => num * 10)
                      .map((num) => num + 1)
                      .filter((num) => num >= 50)

console.log(newNums);
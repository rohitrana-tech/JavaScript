 const tinderUser = new Object()
tinderUser.id = "1234abcd"
tinderUser.name = "Remo"
tinderUser.isLoggedIn = false
 console.log(tinderUser);

 const regularUser ={
    email : "Remo@gmail.com",
    fullname: {
        Username: {
            firstname: "Rohit",
            lastname: "Rana"
        }
    }
 }

 console.log(regularUser.fullname.Username.firstname)

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}
 const obj3 = {5: "a", 6: "b"}

 const obj4 = Object.assign({}, obj1, obj2, obj3)

 const obj5 = {...obj1, ...obj2, ...obj3}
 console.log(obj4);
 


 const users = [
    {
        id: 1,
        email: "Rohit@gmail.com"
    },
    {
        id: 2,
        email: "Remo@gmail.com"
    },
    {
        id: 3,
        email: "Rana@gmail.com"
    },
 ]
 
 users[1].email
 console.log(tinderUser);

 console.log(Object.keys(tinderUser))
 console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor

// De structuring of an object

const {courseInstructor: instructor} = course
console.log(courseInstructor);
console.log(instructor);

// JSON basic syntax

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }



 
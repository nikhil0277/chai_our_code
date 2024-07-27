// first way to declair objects
const tinderUser =new Object()
tinderUser.Id ="4747wj"
tinderUser.Name ="nikhil"
//second way
const tinder ={
     email :"nikhil@277",
     fullName :{
userFullName :{
firstName:"hitesh",
lastName:"kumar"
}
     }
}
console.log(tinder.fullName.userFullName.firstName)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('Name'))//for checking peroperties are persent ou not in the object 

const obj1={1:"nikhil",2:"hitesh",4:"hitubhai"}
const obj2={5:"nick",6:"hitu",7:"star"}
// const obj3 ={
//     obj1,obj2
// }
// const obj3 = Object.assign({}, obj1, obj2) //ye method objects ko bikherne ke kam krta hai
const obj3 ={...obj1,...obj2}//ye bhi same hi kam karta hai

console.log(obj3)




     const course={
          courseName:"js",
          price :999,
          courseInstructer:"hitesh"
     }
     const {courseInstructer} = course// bar bar course.instructer ko use na krna pde 
     console.log(courseInstructer)





     //API
     //JSON
     {
          "Name":"nikhil",
          "class":"cse",
          "cost":"free",
     }

     [
          {"Name1":"nikhil"},
          {"class":"cse"},
          {"cost":"free"}
     ]
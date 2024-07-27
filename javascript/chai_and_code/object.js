//singleton
//object
const mysy =Symbol("key1")
const jsUser={
    name : "nikhil",
    class : "btech2year",
    [mysy] : "key1",
    gmail:"nikhil2434@gmail.com",
    isLoggedIn : false,
    lastLoginDays :["mon","sat"]
}

console.log(jsUser.name)//first way to acess an object's elements
console.log(jsUser["name"])//second way to acess an object's element 
console.log(jsUser.mysy)
console.log(jsUser)
console.log(typeof jsUser[mysy])
jsUser.name="hitesh"
Object.freeze(jsUser)//use for freezing object after freeze we can'nt change object's element
jsUser.name="nikhil"
console.log(jsUser.name)

jsUser.greeting = function (){
    console.log("i am nikhil")
}
console.log(jsUser.greeting)
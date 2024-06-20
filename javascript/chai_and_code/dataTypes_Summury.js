// premitive data type
// 1. string
// 2.Number
// 3.boolean
// 4.null
// 5.undefined
// 6.symbol 
// 7.BigInt

// reference typeof(non-premitive)
// 1.array
// 2.object 
// 3.function 
let z;
const  score=100
const scoreValue=100.5
const isLoggedIn=false
const outSidetemp=null
const id=Symbol('123')
const anotherId=Symbol('123')

console.table([score,scoreValue,isLoggedIn,outSidetemp,z])
console.table([id === anotherId])
 
// arrays
const heros=["Saktiman","balveer","doga"]
//object
let myObj={
    name:"nikhil",
    claass:"b.tech sce"

}
const myFunction=function(){
    console.log("hi i am nikhil")
}


    myFunction()
console.log(typeof outSidetemp)
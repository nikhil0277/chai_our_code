function sayMyName(){
    const name = "nikhil"
    console.log(name)
}
sayMyName()
sayMyName()

function add(){
const a =2
const b =3
const c=a+b
console.log(c)
}

add()

function sub(a,b){
const c=a-b
console.log(c)
return c;
}
const result =sub(15,8)
console.log("result :",result)



function loginUser(username){
    if(username === undefined){
console.log("please enter name");
    }
    else{
return`${username} just logged in`
}
}
console.log(loginUser())
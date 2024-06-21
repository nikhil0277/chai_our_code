// primitive type ->(stack), non printmitive types->(heap)
let name ="nikhil"
let Student='name'
 Student="kartik"
console.log("my name is ",name)
console.log("my friends name is ",Student)
let user={
    email:"nikhil@363737",
    password:"171717"
}
let userOne=user
userOne.email="nikhil@3636"
userOne.password="2535353"
console.log(userOne.email)
console.log(user.email)
console.log(user.password)
let date = new Date()
console.log(date.toDateString())
console.log(date.toString())
console.log(date.toLocaleDateString())
let newdate = new Date(2023, 2, 9)
console.log(newdate)
let ndate = new Date("4-8-2004")
console.log(ndate.toDateString())
let vdate = Date.now()
console.log(vdate)
console.log(ndate.getTime())
console.log(Math.floor(vdate / 100))
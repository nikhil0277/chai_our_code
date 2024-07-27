const marvel_heros =["thor","ironman", "spiderman"];
let dc_heros =["superman","flash","pani ka devta"];
marvel_heros.push("nikhil")
marvel_heros.push(dc_heros)
console.log(marvel_heros)
console.log(dc_heros)
const allHeros=dc_heros.concat(marvel_heros);//ye function ak new aaray return karta hai
allheros=["...marval...",'..dc..']
console.log(allHeros)
console.log(dc_heros)
const another_array=[1,2,3,[3,2,1],5,4,3,[5,6,7],6,8]//sare arrays ko ak jagah kar diya is function ne
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)
console.log(Array.isArray("nikhil","kumar"))// true false return krega ye ak array hai ki nhi
console.log(Array.from("nikhil"))// ye fun name ko array me tod deta hai
console.log(Array.from({name:"nick"}))// return a empty array


let score1="nikhil"
let score2="kumar"
let score3="kumawat"
let score="kargval"
console.log(Array.of(score1,score2,score3,score))
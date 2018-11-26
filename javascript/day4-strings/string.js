let city = 'bangalore'
console.log(city)
console.log(city[0]) // 'b'
console.log(city[1]) // 'a'

let productName = 'marker'
let productDescription = 'white board marker'
let reviews = 'wonderful marker'

let userName = 'jehu'
let email = 'jehuamanna@gmail.com'
let password = 'secret123'
let randomSet = 'JaYaNaGaR'

console.log(password.length) //9
console.log(typeof(city)) //'string'
console.log(userName.toUpperCase()) // JEHU
console.log(userName.toLowerCase()) // jehu

let sentence = 'now is the time for all good people'
console.log(sentence.indexOf('time')) // 11
console.log(sentence.indexOf('bangalore')) // -1
console.log(city.indexOf('a')) // 1
console.log(city.lastIndexOf('a')) // 4

console.log(city.indexOf('g')) // 3
console.log(city.lastIndexOf('g')) // 3
//above combination can be used to find whether a something occurs only once.

console.log(city.charAt(0)) // b
console.log(city.includes('g')) // true
console.log(city.includes('h')) // false

let countStars = 4
console.log('*'.repeat(3)) // ***
console.log('*'.repeat(countStars)) // ****

let someWord = 'lol bol '
console.log(someWord.repeat(3)) // 'lol bol lol bol lol bol '




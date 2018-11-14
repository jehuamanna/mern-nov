let productPrice = 175
let temperature = 26.3
let stockPrice = 97.74

console.log(typeof productPrice) //'number'
console.log(typeof temperature) //'number'

// number is a primitve data type.

// Math object

console.log(Math.PI) //PI is a property
console.log(Math.random()) //random is a property
console.log(Math.round(temperature)) //26
console.log(Math.floor(temperature)) //26
//temperature = Math.floor(temperature) // change the value of temperature
console.log(temperature) // 26.3
console.log(Math.ceil(temperature)) //27
console.log(Math.round(stockPrice)) //98
console.log(Math.floor(stockPrice)) // 97

console.log(Math.min(50, 60, 30, 15)) // 15
console.log(Math.min([10, 20, 5])) //NaN

let prices = [10, 20, 5, 100, 150]
//spead operator
//Math.max(...prices) = Math.max(10,20,5,100,150)
console.log(Math.max(...prices)) //150

let value = -125
console.log(Math.abs(value)) //125

console.log(Math.pow(2,3)) //8
console.log(Math.sqrt(64)) //8


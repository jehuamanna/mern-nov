let city = 'bangalore'

console.log(city.split('')) // [ 'b', 'a', 'n', 'g', 'a', 'l', 'o', 'r', 'e' ]

let slogan = 'make in india'
console.log(slogan.split(' ')) // [ 'make', 'in', 'india' ]

let address = '#430 - Jayanagar 4th Block - Bangalore'
let formattedAddress = address.split(' - ')
console.log(formattedAddress) //[ '#430', 'Jayanagar 4th Block', 'Bangalore' ]
let fruits = 'apple, mango, watermelon'
console.log(fruits.split(', ')) // [ 'apple', 'mango', 'watermelon' ]
console.log(fruits.split('-')) // [ 'apple, mango, watermelon' ]

let emails = '1@gmail.com, 2@gmail.com, 3@gmail.com'

let name = 'rakesh'
let languages = 'js, py, rb'
let languagesKnown = languages.split(', ')

for (let i = 0; i< languagesKnown.length; i++){
    console.log(name + ' knows ' + languagesKnown[i])
}
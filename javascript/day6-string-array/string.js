let origin = 'bangalore'
let destination = 'mysore'
let distance = 150 
let timeTaken = '3 hours 30 mins'

//console.log('The distance between ' + origin + ' and ' + destination + ' is ' + distance + ' kms ' + 'and the time taken is ' + timeTaken)

// console.log('The distance between ' + origin + ' and ' + destination + ' is ' + (distance +2) + 'and the time taken is ' + timeTaken)

// es6 - template literal / template string
console.log(`The distance between ${origin} and ${destination} is ${distance +2} kms and the time taken is ${timeTaken}`)


const numbers = '1234567890'
let firstPart = numbers.slice(0,3)
let secondPart = numbers.slice(3, 6)
let thirdPart = numbers.slice(6)
console.log(`(${firstPart}) ${secondPart}-${thirdPart}`)

//or
console.log(`(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6)}`)
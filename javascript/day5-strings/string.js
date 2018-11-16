let name = 'arjun'

console.log(name.slice(0,2)) // 'ar'
console.log(name.slice(1,4)) // 'rju'
console.log(name.slice(1)) // 'rjun'

//to capitialize
console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

console.log(name.slice(1,2))  // 'r'

console.log(name.substr(1,2)) // 'rj'

let numbers = '1234567890' // '(123) 456-7890'
let firstPart = numbers.slice(0,3) //
let secondPart = numbers.slice(3,6) 
let thirdPart = numbers.slice(6)// 

console.log('(' + firstPart + ') ' + secondPart + '-' + thirdPart) // (123) 456-7890

firstPart = numbers.substr(0, 3)
secondPart = numbers.substr(3, 3)
thirdPart = numbers.substr(6, 4)
console.log('(' + firstPart + ') ' + secondPart + '-' + thirdPart) // (123) 456-789



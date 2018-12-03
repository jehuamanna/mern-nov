let languages = ['py', 'rb', 'js']
let person = 'rakesh'

// result = ['rakesh knows py', 'rakesh knows rb', 'rakesh knows js']
// c style
result = []
for(let i =0; i<languages.length;i++){
    result.push(`${person} knows ${languages[i]}`)
}

console.log(result)

// js style
let result1 = languages.map(function(lang){
    return `${person} knows ${lang}`
})

console.log(result1)

const numbers = [10, 20, 30]
let plus2 = numbers.map(function(n){
    return n + 2
})

console.log(numbers)
console.log(plus2)
console.log(numbers)
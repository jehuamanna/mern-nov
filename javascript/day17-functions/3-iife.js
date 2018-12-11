// iife - immediately invoked function expression

function sayHello(name){
    return 'Hello ' + name
}

console.log(sayHello('urvi'))
;(function(name){
    console.log('Hello i am iife ' + name)
})('sunil')

//return value
let result = (function(name){
    return 'hello ' + name
}('sunil'))
console.log(result)
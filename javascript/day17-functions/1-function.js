// function declaration
function sayHello() {
    console.log('im inside the function')
    return 'Hello'
}

// function invocation / calling of the function

console.log(sayHello) // im only referring to the function and not invoking it.

console.log(sayHello())

function greet(name) { // name = parameter, variables that can used INSIDE the function
    return 'Hello ' + name
}

console.log(greet()) 
console.log(greet('Shyam')) // Shyam is an argument
console.log(greet('Pavan'))

let result = greet('sachin')
console.log(result)
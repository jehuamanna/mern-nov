// set default values to your parameters
// es5
function add(n1,n2){
    // ternary operator
    // n1 = typeof n1 == 'undefined' ? 0: n1

    //below works only if we are working with numbers and want to set default value 0
    n1 = n1 || 0
    n2 = n2 || 0
    return n1 + n2
    
}

console.log(add())
console.log(add(10))
console.log(add(10, 20))
console.log(add(10, 20, 30))

// es6
function addes6(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(addes6())
console.log(addes6(10))
console.log(addes6(undefined, 20))
console.log(addes6(10, 20))
let n1 = 10, n2 = 20
function add(n1, n2){
    // result is a variable used inside the functio, but not created iwht the keywords let, var and const, hence result is now created on the fly and available globally.
     result = n1 + n2
    return result
}

console.log(add(n1, n2))

console.log(result)
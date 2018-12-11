let n1 = 10, n2 = 20
function add(n1, n2){
    //let keyword is making result a local variable
    let result = n1 + n2
    return result
}

console.log(add(n1, n2))

// because a variable declared inside a function lives only with in the function
// console.log(result) Error
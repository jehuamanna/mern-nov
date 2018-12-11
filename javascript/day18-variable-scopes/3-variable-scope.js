let n1 = 10, n2 = 20
function add() {
    let n1 = 100, n2 = 200
    console.log('inside function')
    console.log(n1, n2)
    return n1+ n2
}

console.log(n1,n2)
console.log(add())
console.log(n1,n2)
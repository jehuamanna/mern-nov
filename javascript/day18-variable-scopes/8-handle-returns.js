function getNumbers() {
    let n1 = 10, n2 = 20, n3 = 30
    // to return multiple values from a function, return either 
    return [n1, n2, n3]
}

const result = getNumbers()
const a1 = result[0], a2 = result[1], a3 = result[2]
console.log(result[0], result[1], result[2])
console.log(a1, a2, a3)

function objNumbers() {
    let n1 = 10, n2 = 20, n3 = 30
    return {n1, n2, n3}
}

const resultObj = objNumbers()
const b1 = resultObj.n1, b2 = resultObj.n2, b3 = resultObj.n3
// Object Destructuring
const {n1,n2,n3} = resultObj
console.log('object destructuring', n1,n2,n3)
console.log(resultObj)
console.log(b1, b2, b3)
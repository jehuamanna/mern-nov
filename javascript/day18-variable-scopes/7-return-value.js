function numbers(){
    let n1 = 10, n2 = 20, n3 = 30
    // function can return only 1 value
    return n1, n2, n3
}

console.log(numbers()) // 30

function getNumbers() {
    let n1 = 10, n2 = 20, n3 = 30
    // to return multiple values from a function, return either as an array or an object

    // return [n1, n2, n3]
    // return {n1: n1, n2: n2, n3: n3}
    return { n1, n2, n3} // es6 concise properties
}

console.log(getNumbers())
// es6 arrow functions
const sum = (n1, n2) => {
    return n1 + n2
}

console.log(sum(10, 20))

const numbers = [10, 15, 20, 25, 30]

//filter and get odd only
// const odd = numbers.filter(function(n){
//return n %2 != 0
// })
// console.log(odds)

// 1 way
// const odds = numbers.filter((n) =>{
// return n%2 !=0
// })
// console.log(odds)

// if there is only 1 argument passed to the function, you can remove the () brackers
const odds = numbers.filter(n => {
    return n % 2 != 0
})

console.log(odds)


// if there is 2 or more arguments, we have to use the () brackets
numbers.forEach((n,i) =>{
    console.log(i, n)
})

// if there is only 1 return statement then you can ignore the return keyword as well as the flower brackets.

const evens = numbers.filter(n => n % 2 == 0)
console.log(evens)
// if we are returing an object from a function, we need to wrap the object in ()

const personFunction = (name, city) =>({
    name, city //we are using es6 concise properties
})

console.log(personFunction('arjun', 'bangalore'))
const numbers = [10, 15, 20, 25, 30]

// C style
let evenNUmbers = []
for (let i = 0 ; i< numbers.length; i++){
    if(numbers[i] %2 == 0) {
        evenNUmbers.push(numbers[i])
    }
}
console.log(evenNUmbers)

// javascript way - filter

let result = numbers.filter(function(value){
    return value % 2 == 0
})

console.log(result)
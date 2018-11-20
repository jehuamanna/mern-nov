const players = ['sachin', 'virat', 'dhoni', 'rahul']

// console.log(players.length) // 4
// console.log(players[4]) // undefined
// console.log([players[players.length -1]])

// for
// initialization; condition; incrementation
for(let i =0; i< players.length; i++){
    console.log(i, players[i].toUpperCase()) // access the array elements via indexes
}

// forEach - array
// each element in the array is passed as an argument to the function
players.forEach(function(name){
    console.log(name)
})

const fruits = ['apple', 'watermelon', 'strawberry']

fruits.forEach(function(name, index){
    console.log(index, name)
})

//es6 - for of

for( let fruit of fruits) {
    console.log(fruit)
}

// for in - object
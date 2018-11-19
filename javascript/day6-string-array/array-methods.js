let fruits = ['apple', 'watermelon']

console.log(fruits.length) // 2

//add an elemnt to the end of the array
fruits.push('chickoo')
console.log(fruits) // [ 'apple', 'watermelon', 'chickoo' ]
console.log(fruits.length) //3

//add an element at the beginning of array
fruits.unshift('strawberry')
console.log(fruits) // [ 'strawberry', 'apple', 'watermelon', 'chickoo' ]

// add element at specific index
fruits.splice(2, 0, 'banana')
console.log(fruits) // [ 'strawberry', 'apple', 'banana', 'watermelon', 'chickoo' ]


let players = ['sachin', 'virat', 'dhoni', 'shewag', 'zaheer']
console.log(players) // [ 'sachin', 'virat', 'dhoni', 'shewag', 'zaheer' ]
//remove element from end of array
players.pop()
console.log(players) // [ 'sachin', 'virat', 'dhoni', 'shewag' ]
//remove element from beginning of array
players.shift()
console.log(players) // [ 'virat', 'dhoni', 'shewag' ]

//remove at a specific index
players.splice(1,1)
console.log(players) //[ 'virat', 'shewag' ]

let cities = ['bangalore', 'chennai', 'delhi', 'hydrabad', 'mumbai']
cities.splice(1,3)
console.log(cities) //[ 'bangalore', 'mumbai' ]

let tags = 'travel, stay, explore'

let keywords = tags.split(', ')
console.log(keywords)  //

console.log(players)
console.log(players.join(', '))

console.log(cities.join(' - '))

let actors = ['decaprio', 'mark walburg', 'matt demon']
console.log(actors.join((', ')))

let numbers = [1,2,3,4,5,6,7,8,9,0]

console.log(numbers.slice(0,3))
console.log(numbers.slice(3,6))
console.log(numbers.slice(6))

console.log(`(${numbers.slice(0,3).join('')} ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')})`)

console.log(cities)

// element is present in an array and at what index 
// indesOf has 2 use caes 1) to know what is the index of an element  2) to know if element is present or not
console.log(cities.indexOf('mumbai')) // 3
console.log(cities.indexOf('kochi')) // -1

console.log(`mumbai is found in the ${cities.indexOf('mumbai')} index`)

if (cities.indexOf('mumbai') >=0) {
    console.log('element found')
}
else 
{
    console.log('element not found')
}

console.log(cities.includes('bangalore')) // true
console.log(cities.includes('kochi')) // false
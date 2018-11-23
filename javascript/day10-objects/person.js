let person = { firstName: 'sachin'}

console.log(person)
console.log(typeof person) // 'object'

console.log(person.lastName) // undefined

// add a new property into a object
person.lastName = 'tendulkar'
console.log(person)

// update a value of a property
person.firstName = 'SACHIN'

// remove a property from an object
delete person.lastName
console.log(person)

let student = new Object()

let product = { 
    name : 'marker',
    price: 15,
    description: 'white board marker'
}

// if you want to know all properties of an object
console.log(Object.keys(product)) // [ 'name', 'price', 'description' ]
console.log(Object.values(product)) // [ 'marker', 15, 'white board marker' ]

// to know if a value is present in object
console.log(Object.values(product).includes('marker')) // true
console.log(Object.values(product).includes('camlin')) // false

// to now if a property is present in obh
console.log(Object.keys(product).includes('reviews')) // false
console.log(product.hasOwnProperty('name')) //true

console.log(product.name == undefined) // false
console.log(product.sellerInfo == undefined) // true

// whenever we are trying to access a property of an object via variable we should always use [] and not . operator

let someKey = 'name'
console.log(product.someKey) // undefined
console.log(product[someKey]) // 'marker' product['name']

// for in
for ( let key in product ) {
    console.log(`${key} - ${product[key]}`)
}

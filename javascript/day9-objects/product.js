// object is an ordered, string indexed, collection of values

const productArr = ['marker', 15, 'whiteboard marker', false, 'camlin']
console.log(productArr[1])
console.log(productArr[4])
console.log(`The cost of ${productArr[0]} is ${productArr[1]}. It is a ${productArr[2]}`)

const product = {
    'name': 'marker',
    'price': 15,
    'description': 'white board marker',
    'codEligible': false,
    'brand': 'Camlin',
    sellers: ['sri venkateshwara stationary', 'SS paper mart'],
    reviews: [
        {userName: 'arjun', rating: 4, body: 'long lasting'},
        {userName: 'gaja', rating: 3, body: 'its very nice'}
    ]
}

console.log(product.name)
console.log(product.price)
console.log(product.description)
console.log(product.codEligible)

console.log(`The cost of ${product.name} is ${product.price}. It is a ${product.description}.`)
console.log(`Listing Reviews - ${product.reviews.length}`)
product.reviews.forEach(function(review) {
    console.log(`${review.userName} has rated ${review.rating}`)
})
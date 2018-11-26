let product = {
    name: 'marker',
    price: 15,
    details: function() {
        return `${this.name} INR ${this.price}`
    }
}

console.log(product.name)   // 'marker'
console.log(product['name']) // 'marker'
console.log(product.details()) 
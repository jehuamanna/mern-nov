const mobiles = [
    {
        id: 1, 
        name: 'Redmi 5', 
        price:14500, 
        colors: ['black', 'gold'] 
    },
    {   id: 2, 
        name: 'Samsung', 
        price: 13500, 
        colors:['black', 'blue']}
]

console.log('Listing mobiles - ' + mobiles.length)

mobiles.forEach(function(mobile){
    console.log(`${mobile.name} price is ${mobile.price} is available in ${mobile.colors.join(', ')}`)
})
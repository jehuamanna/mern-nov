const cartItems = [
    {productName: 'marker', price: 15, quantity: 1},
    {productName: 'scale', price: 10, quantity: 2}
]
// Activity 1
cartItems.forEach(function(cartItem){
    console.log(`${cartItem.productName} - ${cartItem.price} - ${cartItem.quantity}`)
})

// Activity 2
cartItems.forEach(function(cartItem){
    console.log(`${cartItem.productName} - ${cartItem.price} - ${cartItem.quantity} - ${cartItem.quantity*cartItem.price}`)
})
// Activity 3
let sum = 0, total = 0
cartItems.forEach(function(cartItem){
   
    console.log(`${cartItem.productName} - ${cartItem.price} - ${cartItem.quantity} - ${cartItem.quantity*cartItem.price}`)
    sum += cartItem.quantity
    total += cartItem.quantity*cartItem.price
})
console.log(`${sum} - ${total}`)

let items = [
    {itemName: 'idli', isVeg : true, cuisine : 'si'},
    {itemName: 'samosa', isVeg : true, cusine : 'si'},
    {itemName: 'chicken Byriani', isVeg : false, cuisine : 'si'},
    {itemName: 'roti curry', isVeg : true, cuisine : 'ni'},
    {itemName: 'butter chicken', isVeg : false, cuisine : 'ni'}
]

let filteredVegItems = items.filter(function(item) {
    return item.isVeg
})

console.log(filteredVegItems)

let filteredCuisineItems = items.filter(function(item){
    return item.cuisine == 'ni'
})

console.log(filteredCuisineItems)

let filteredVegCuisine = items.filter(function(item){
    return item.cuisine == 'ni' && item.isVeg
})

console.log(filteredVegCuisine)
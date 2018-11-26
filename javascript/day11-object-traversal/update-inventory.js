
let currentInventory = [
    { name: "HTC", stock: 25 }, 
    { name: "Nokia", stock: 1000 }, 
    { name: "Samsung", stock: 50 }, 
    { name: "Sony", stock: 10 },
    { name: "Apple", stock: 15 }
]

let newInventory = [
    { name: "LG", stock: 5 }, 
    { name: "Sony", stock: 10 }, 
    { name: "Samsung", stock: 5 }, 
    { name: "Apple", stock: 15 }
]

function updateInventory(currentInventory, newInventory){
    newInventory.forEach(function(newInventoryItem){
        let item = currentInventory.find(function(currentInventoryItem){
            return currentInventoryItem.name == newInventoryItem.name
        })
        if(item){
            item.stock = item.stock + newInventoryItem.stock
        }
        else{
            currentInventory.push(newInventoryItem)
        }
    })
    return currentInventory
}

console.log(updateInventory(currentInventory, newInventory))
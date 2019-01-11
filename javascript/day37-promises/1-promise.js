products = [
    {id:1, name:'marker'},
    {id:2, name:'pen'}
]


const productFind = (id) =>{
    return new Promise(function(resolve, reject){
        let product
        setTimeout(() => {
            product = products.find(product => product.id == id)
            if(product){
                resolve(product)
            }
            else{
                reject(new Error('product not found'))
            }
        }, 500)
    })
}


console.log("before finding")
productFind(1).then(function(product){
    console.log('i have found record')
    console.log(product)
}).catch(function(err){
    console.log(err.message)
})
console.log('after finding')
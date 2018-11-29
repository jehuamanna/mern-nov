// url - https://jsonplaceholder.typicode.com/users/1

const axios = require('axios')
let url = 'https://jsonplaceholder.typicode.com/users/2'

// aios.get(url) return a PROMISE (vv imp) (objects)
let id = process.argv[2]
url = `https://jsonplaceholder.typicode.com/users/${id}`
axios.get(url).then(function(response){
    const user = response.data
    //console.log(typeof user)
    console.log(`${user.id} ${user.name} ${user.email}`)
}).catch(function(err){
    console.log(err.message)
})

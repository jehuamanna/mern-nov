const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users'

axios.get(url).then(function(response){
    users = response.data
    console.log(`Listing users - ${users.length}`)
    users.forEach(function(user){
        console.log(`${user.id}. ${user.name} ${user.email}`)
    })
}).catch(function(err){
    console.log(err.message)
})
const express = require('express')
const app = express()
const port=3001

//Route Handler
// app.METHOD(path/url, Handler)

app.get('/', function(request, response){
    response.send('welcome to our website')

})

app.get('/about', function(request, response){
    response.send('<h2> About us page</h2>')
})

app.get('/users', function(request, response){
    response.send([
        {id: 1, name: 'arjun'},
        {id:2, name:'sumanth'}
    ])
})

app.listen(port, function(){
    console.log('server up...listening on port', port)
})
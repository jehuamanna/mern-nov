const express = require('express')
const app = express()
const port=3001

//Route Handler
// app.METHOD(path/url, Handler)


const students = [
    {id:1, name: "Jehu", hometown: "uchila"},
    {id:2,name:"Josiah", hometown: "uchila"}

]

const products = [
    {id:1, name: 'marker'},
    {id:2, name: 'scale'}
]

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



app.get('/students', function(request, response){
    response.send(students)
})

// named parameters
app.get('/students/:id', function(request, response){
    //  console.log('incoming method',request.method)
    // console.log('request url', request.url)
    // console.log('request ip address', request.ip)
    // console.log(request.params)
    // respond.send(`you selected student with id ${request.params.id}`)
    let student=students.find(function(stud){
        return stud.id == request.params.id
    })
    if(student){
        response.send(student)
    }else{
        response.send(`no students found with the id ${request.params.id}`)
        response.send({})
    }
})

app.get('/students/name/:name', function(request, response){
    let student = students.find(function(stud){
        return stud.name == request.params.name
    })
    response.send(student)
})

app.get('/products', function(request, response){
    response.send(products)
})

app.get('/products/:name', function(request, response){
    let product = products.find(function(prod){
        return prod.name == request.params.name
    })

    if (product){
        response.send(product)
    }
    else{
        response.send({})
    }
})
app.listen(port, function(){
    console.log('server up...listening on port', port)
})
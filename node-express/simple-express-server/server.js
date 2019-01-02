const express = require('express')
const app = express()
const port=3002


app.use(express.json())
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


let players = [
    {id: 1, name:'sachin'}
]

app.get('/players', function(req, res){
    console.log(req.method, req.url)
    res.send(players)
})

app.put('/players/:id', function(req,res){
    let id = req.params.id
    let body = req.body
    let player = players.find(function(player){
        return player.id == id
    })
    console.log("helloworld")

    if(player){
        player.name = body.name
        res.send({
            player,
            notice: "sucessfully updated the player"
        })
    } else{
        res.send({})
    }
})

app.delete('/players/:id', function(req, res){
    let id = req.params.id
    players = players.filter(function(player){
        return player.id != id
    })
    res.send(players)
})


// app.get('/players/:id', function(req,res){
//     let player = players.find(function(player){
//         return player.id == req.params.id
//     })
//     if(player){
//         res.send(player)
//     }else{
//         res.send({})
//     }
// })

// app.post('/players', function(req, res){
//     console.log(req.method, req.url)
//     console.log('incoming data', req.body)
//     const data = req.body
//     player.push(data)
//     res.send({
//         player: data,
//         notice: 'successfully created a player'
//     })
// })

app.listen(port, function(){
    console.log('server up...listening on port', port)
})
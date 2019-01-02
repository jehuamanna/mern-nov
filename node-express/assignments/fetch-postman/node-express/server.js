const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

const players = [
    {id:1, name:"sachin"},
    {id:2, name:"dhoni"}
]

app.get('/', function(req, res){
    res.send('Welcome to  our website')
})

app.get('/players', function(req, res){
    res.send(players)
})

app.get('/players/:id', function(req,res){
    const player = players.find(function(player){
        return player.id == req.params.id
    })
    if(player){
        res.send(player)
    }
    else{
        res.send({})
    }
})

app.post('/players', function(req, res){
    const data = req.body
    console.log(data)
    players.push(data)
    res.send({
        player: data,
        notice: "Data added successfully "
    })
})

app.listen(port, function(){
    console.log('server up and running on port', port)
})
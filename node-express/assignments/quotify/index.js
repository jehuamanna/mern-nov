const express = require('express')
const mongoose = require('mongoose')
require('./config/database')
const axios = require('axios')
const app = express()
const port = 3001
const cors = require('cors')
app.use(cors())
app.use(express.json())

const { Schema } = mongoose
const quoteSchema = new Schema({
    quoteText: {
        type: String,
        required: true
    },
    quoteAuthor: {
        type: String,
        required: true
    }
})

const Quote = mongoose.model('Quotes', quoteSchema)


app.get('/', (req, res) => {
    res.send('Welcome to quotify')
})

app.get('/quotes', (req, res) => {
    Quote.find()
        .then((quotes) => {
            res.send(quotes)
        })
        .catch((err) => {
            res.send('something went wrong', err)
        })
})

app.get('/quotes/new', (req, res) => {
    const getQuote = () => {
        return new Promise(function (resolve, reject) {
            let data
            axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
                .then((response) => {
                    resolve(response.data)
                })

                .catch((err) => {
                    reject(err)
                })
        })
    }
    getQuote().then(function(data){
        res.send(data)        
    }).catch(function(err) {
        res.send(err)
    })

})

app.post('/quotes/new', (req, res)=>{
    const body = req.body
    const quote = new Quote(body)
    quote.save()
    .then((quote) => {
        res.send(quote)
    })
    .catch((err)=>{
        res.send(err)
    })
})




app.post('/quotes', (req, res) => {
    const body = req.body
    const quote = new Quote(body)
    quote.save()
        .then((quote) => {
            res.send(quote)
        })
        .catch((err) => {
            res.send(err)
        })
})

app.put('/quotes/:id', (req, res) => {
    const id = req.params.id
    const data = req.body
    Quote.findByIdAndUpdate(id, data, {new:true})
        .then((quote) => {
            res.send(quote)
        })
        .catch((err) => {
            res.send(err)   
        })
})

app.delete('/quotes/:id', (req, res) => {
    const id = req.params.id
    Quote.findByIdAndDelete(id)
        .then((quote) => {
            res.send(quote)
        })
        .catch((err) => {
            res.send(err)
        })
})

app.listen(port, () => {
    console.log('server started and listening to port', port)
})
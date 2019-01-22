const express = require('express')
const router = express.Router()
const  { Quote   } = require('../models/quotify')
const axios = require('axios')



router.get('/', (req, res) => {
    Quote.find()
        .then((quotes) => {
            res.send(quotes)
        })
        .catch((err) => {
            res.send('something went wrong', err)
        })
})

router.get('/new', (req, res) => {
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

router.post('/new', (req, res)=>{
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




router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Quote.findByIdAndDelete(id)
        .then((quote) => {
            res.send(quote)
        })
        .catch((err) => {
            res.send(err)
        })
})


module.exports = {
    quotifyRouter : router
}
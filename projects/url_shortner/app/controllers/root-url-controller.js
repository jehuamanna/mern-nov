const express = require('express')
const router = express.Router()
const {Bookmark} = require('../models/bookmark')


router.get('/', (req, res) =>{
    res.send("Welcome to url shortner")
})

router.get('/:hash', (req, res) => {
    const hash = req.param.hash
    Bookmark.findOne({hash_url:hash})
    .then((bookmark) => {
        res.redirect(bookmark.original_url)
    })
    .catch((err) => {
        res.send(err)
    })
})

module.exports = {
    rootUrlRouter : router
}
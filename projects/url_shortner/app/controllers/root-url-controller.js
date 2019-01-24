const express = require('express')
const router = express.Router()
const {Bookmark} = require('../models/bookmark')



router.get('/:hash', (req, res) => {
    console.log(req.useragent)
    click = {
        date: Date.now(),
        ipAddress: "",
        browserName: req.useragent.browser,
        osType: req.useragent.os,
        deviceType: req.useragent.isDesktop ? 'desktop': 'mobile'
        }
    const hash = req.param.hash


    // Bookmark.findOneAndUpdate({hash_url:hash}, {$push:{clicks:click}})
    Bookmark.findOne({hash_url:hash})
    .then((bookmark) => {
        res.redirect(bookmark.original_url)
    })
    .catch((err) => {
        res.send(err)
    })
})

router.get('/', (req, res) =>{
    res.send("Welcome to url shortner")
})


module.exports = {
    rootUrlRouter : router
}
const express = require('express')
const router = express.Router()
const {Bookmark} = require('../models/bookmark')

router.get('/', (req, res) => {
    res.send('its working')
    // const name = req.params.name
    // Bookmark.find({tag:name})
    //     .then((bookmarks) => {
    //         res.send(bookmarks)
    //     })
    //     .catch((err) => {
    //         res.send(err)
    //     })
})



module.export = {
    tagsRouter : router
}
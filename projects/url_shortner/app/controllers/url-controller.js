const express = require('express')
const router = express.Router()
const {Bookmark} = require('../models/bookmark')
router.get('/tags', (req, res) => {
    console.log(req.query.names)
    // const names = req.query.names.split(',')
    
    Bookmark.find({tags:{  '$in':req.query.names.split(',') }})
    .then((bookmark) => {
        res.send(bookmark)
    })
    .catch((err) => {
        res.send(err)
    })
})


router.get('/tags/:name', (req, res) => {
    const name = req.params.name
    Bookmark.find({tags:name})
        .then((bookmarks) => {
            res.send(bookmarks)
        })
        .catch((err) => {
            res.send(err)
        })
})



router.get('/', (req, res) => {
    Bookmark.find()
    .then((bookmarks) => {
        res.send(bookmarks)
    })
    .catch((err) => {
        res.send(err)
    })
})

router.get('/:id', (req, res) =>{
    const id = req.params.id
    Bookmark.findById(id)
    .then((bookmark) => {
        res.send(bookmark)
    })
    .catch((err) => {
        res.send(err)
    })
})

router.post('/', (req, res) => {
    const body = req.body
    const bookmark = new Bookmark(body)
    bookmark.save()
        .then((bookmark) => {
            res.send(bookmark)
        })
        .catch((err) => {
            res.send(err)
        })
})

router.put('/:id', (req,res) =>{
    const id = req.params.id
    const body = req.body
    Bookmark.findByIdAndUpdate(id,  body,{new:true})
    .then((bookmark) => {
        res.send(bookmark)
    })
    .catch((err) => {
        res.send(err)
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    Bookmark.findByIdAndDelete(id)
    .then((bookmark) =>{
        res.send(bookmark)
    })
    .catch((err) => {
        res.send(err)
    })
})


module.exports = {
    bookmarkRouter : router
}
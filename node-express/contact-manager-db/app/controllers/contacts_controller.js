const express = require('express')
const router = express.Router()
const { Contact } = require('../models/contact')
const {User} = require('../models/user')
const jwt = require('jsonwebtoken')
// route - fetch all contacts from db and send it to client

function authenticateUser(req, res,next) {
    const token =  req.header('x-auth')
    if(token) {
        User.findByToken(token)
        .then((user) => {
            req.user = user
            req.token = token
            next()

        } )
        .catch((err) => {
            res.send(err)
        })

    }
    else{
        res.send('token not provided')
    }
    }


router.get('/', authenticateUser,  (req, res) => {
    Contact.find({
        user: req.user._id
    })
        .then((contacts) => {
            res.send(contacts)

        })
        .catch((err) => {
            res.send(err)
        })
})


// route to create a contact

router.post('/', authenticateUser, (req, res) => {
    const body = req.body
    const contact = new Contact(body)
    contact.user = req.user._id
    contact.save()
        .then((contact) => {
            res.send(contact)

        })
        .catch((err) => {
            res.send(err)
        })

})

router.get('/:id', authenticateUser ,(req,res) =>{
    const id = req.params.id
    Contact.findOne({
        _id: id,
        user: req.user._id  
    })
        .then((contact) =>{
            if(contact){
            res.send(contact)
            }
            else{
                res.send('Cant show the details')
            }

        })
        .catch((err) => {
            res.send(err)
        })
})


// route to delete a contact
router.delete('/:id',authenticateUser,(req, res) =>{
    const id = req.params.id
    Contact.findOneAndDelete({
        _id:id,
        user: req.user._id
    })
    .then((contact) => {
        if(contact){
            res.send(contact)
        }
        else{
            res.send("Cant delete")
        }

    
    })
    .catch((err) =>{
        console.log('hi')
        res.send(err)
    })
})

module.exports = {
    contactsRouter: router
}


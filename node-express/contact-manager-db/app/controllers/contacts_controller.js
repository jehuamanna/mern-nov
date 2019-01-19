const express = require('express')
const router = express.Router()
const { Contact } = require('../models/contact')

// route - fetch all contacts from db and send it to client
router.get('/', (req, res) => {
    Contact.find()
        .then((contacts) => {
            res.send(contacts)

        })
        .catch((err) => {
            res.send(err)
        })
})


// route to create a contact

router.post('/', (req, res) => {
    const body = req.body
    const contact = new Contact(body)
    contact.save()
        .then((contact) => {
            res.send(contact)

        })
        .catch((err) => {
            res.send(err)
        })

})

router.get('/:id', (req,res) =>{
    const id = req.params.id
    Contact.findById(id)
        .then((contact) =>{
            res.send(contact)

        })
        .catch((err) => {
            res.send(err)
        })
})


// route to delete a contact
router.delete('/contact/:id',(req, res) =>{
    const id = req.params.id
    Contact.findByIdAndDelete(id)
    .then((contact) => {
        res.send(contact)
    
    })
    .catch((err) =>{
        res.send(err)
    })
})

module.exports = {
    contactsRouter: router
}


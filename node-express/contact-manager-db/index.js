const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000


// DB CONGIGURATOIN
//telling mongoose to use es6's promise library
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/contact-manager-nov')
    .then((result) => {
        console.log('connected to db')
    }).catch((err) =>{
        console.log("Error in connection", err)
    })



//common terminologies in MONGO DB
// DB - nothing but a software used to store data
// Collection - [{},{},{}]
// Document - {} regular javascript obect
// Field - nothing but a property

// to store information about a contact - like the name, email, phone, website
// const contacts = [{id:1, name:'ani',email: 'ani@gmail.com', phone 1234, website: 'www.ab.com'}]

// contacts = Collection
//{id:1, name:'ani',email: 'ani@gmail.com', phone 1234, website: 'www.ab.com'} = Document
// id = field
// name = field
// mobile, email, website = field





app.get('/', (req, res) => {
    res.send('Welcome to contact manager')
})

app.listen(port, () => {
    console.log('listening to port ', port)
})
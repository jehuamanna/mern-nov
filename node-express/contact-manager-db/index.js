const express = require('express')
require('./config/database')
const {contactsRouter} = require('./app/controllers/contacts_controller')
const {usersRouter} = require('./app/controllers/users_controller')


const app = express()
const port = 3003
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to contact manager')
})

app.use('/contacts', contactsRouter)
app.use('/users', usersRouter)
app.listen(port, () => {
    console.log('listening to port ', port)
})
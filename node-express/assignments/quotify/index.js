const express = require('express')
require('./config/database')
const app = express()
const port = 3001
const cors = require('cors')
app.use(cors())
app.use(express.json())
const {quotifyRouter} = require('./app/controllers/quotify-controllers')



app.get('/', (req, res) => {
    res.send('Welcome to quotify')
})
app.use('/quotes', quotifyRouter)

app.listen(port, () => {
    console.log('server started and listening to port', port)
})
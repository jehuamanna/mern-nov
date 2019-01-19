const mongoose = require('mongoose')


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/quotify')
    .then((result) => {
        console.log('connected to db')
    })
    .catch((err) =>{
        console.log('error in connection', err)
    })
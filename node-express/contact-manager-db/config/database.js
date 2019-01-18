const mongoose = require('mongoose')
// DB CONGIGURATOIN
//telling mongoose to use es6's promise library


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/contact-manager-nov')
    .then((result) => {
        console.log('connected to db')
    }).catch((err) => {
        console.log("Error in connection", err)
    })


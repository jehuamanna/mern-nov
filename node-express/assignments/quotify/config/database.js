const mongoose = require('mongoose')
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/quotify>' 


mongoose.Promise = global.Promise
// mongoose.connect('mongodb://localhost:27017/quotify')
mongoose.connect(CONNECTION_URI)
    .then((result) => {
        console.log('connected to db')
    })
    .catch((err) =>{
        console.log('error in connection', err)
    })
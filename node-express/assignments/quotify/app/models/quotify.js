const mongoose = require('mongoose')

const { Schema } = mongoose
const quoteSchema = new Schema({
    quoteText: {
        type: String,
        required: true
    },
    quoteAuthor: {
        type: String,
        required: true
    }
})

const Quote = mongoose.model('Quotes', quoteSchema)

module.exports = {
    Quote
}

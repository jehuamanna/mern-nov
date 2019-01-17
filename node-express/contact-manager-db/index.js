const express = require('express')
const mongoose = require('mongoose')
const validator = require('validator')
const app = express()
const port = 3000
app.use(express.json())

// DB CONGIGURATOIN
//telling mongoose to use es6's promise library
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/contact-manager-nov')
    .then((result) => {
        console.log('connected to db')
    }).catch((err) => {
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


const { Schema } = mongoose
const contactSchema = new Schema({
    //all  the fields, its types, and its validations
    name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 128
    },
    mobile:{
        type:String,
        required:true,
        minlength: 10,
        maxlength : 10,
       // custom validations
       validate:{
           validator: function(value){
               return validator.isNumeric(value)
           },
           message:function(){
               return 'invalid mobile number format'
           }
       }
    },
    email:{
        type:String,
        validate:{
            validator: function(value){
                if(validator.isEmpty(value)){
                    return true
                }
                return validator.isEmail(value)
            },
            message:function(){
                return 'invalid email format'
            }
        }
    },
    website:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now  
    }
})

const Contact = mongoose.model('Contact',contactSchema)


app.get('/', (req, res) => {
    res.send('Welcome to contact manager')
})

// route - fetch all contacts from db and send it to client
app.get('/contacts', (req, res) => {
    Contact.find()
        .then((contacts) => {
            res.send(contacts)

        })
        .catch((err) => {
            res.send(err)
        })
})


// route to create a contact

app.post('/contact', (req, res) => {
    const body = req.body
    const contact = new Contact(body)
    contact.save()
        .then((contacts) => {
            res.send(contact)

        })
        .catch((err) => {
            res.send(err)
        })

})

app.get('/contacts/:id', (req,res) =>{
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
app.delete('/contact/:id',(req, res) =>{
    const id = req.params.id
    Contact.findByIdAndDelete(id)
    .then((contacts) => {
        res.send(contact)
    
    })
    .catch((err) =>{
        res.send(err)
    })
})


app.listen(port, () => {
    console.log('listening to port ', port)
})
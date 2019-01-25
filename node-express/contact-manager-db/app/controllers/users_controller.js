const express = require('express')
const router = express.Router()

const {User} = require('../models/user')

// post localhost:3000/users/register
router.post('/register',(req, res) => {
    const body = req.body
    const user= new User(body)
    user.save()
        .then((user)=> {
            res.send({
                user, 
                notice: 'Sucessfully registered'
            })
        }).catch((err) =>{
            res.send(err)
        })
})

router.post('/login', (req, res) => {
    const body = req.body
    //Static method is called on the model / class
    User.findByEmailAndPassword(body.email, body.password)
        .then(() => {

        })
        .catch(()=>{
            
        })

})

router.get('/', (req, res) => {
    User.find()
    .then((user) => {
        res.send(user)
    })
    .catch((err) => {
        res.send(err)
    })
})

router.delete('/:id', (req,res)=>{
    let id = req.params.id
    User.findByIdAndDelete(id)
    .then((user)=> {
        res.send(user)
    })
    .catch((err) => {
        res.send(err)
    })
})

module.exports = {
    usersRouter: router
}
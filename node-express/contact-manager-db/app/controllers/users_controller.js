const express = require('express')
const router = express.Router()

const { User } = require('../models/user')

// post localhost:3000/users/register
router.post('/register', (req, res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then((user) => {
            res.send({
                user,
                notice: 'Sucessfully registered'
            })
        }).catch((err) => {
            res.send(err)
        })
})

router.post('/login', (req, res) => {
    const body = req.body
    //Static method is called on the model / class
    User.findByEmailAndPassword(body.email, body.password)
        .then((user) => {
            return user.generateToken()
        }).then((token) => {
            res.header('x-auth', token).send()
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })

})


router.delete('/logout', (req, res) => {
    const token = req.header('x-auth')

    console.log(token)

    User.findOne({'tokens.token':token})
        .then((user) => {
            // console.log(user)
            user.tokens = user.tokens.filter((item) => {
                return item.token != token
            })
            user.save()
                .then((user) => {
                    res.send({
                        user,
                        notice: 'logged out succesfully'
                    })
                }).catch((err) => {
                    res.send(err)
                })

        })
        .catch((err) => {
            res.send(err)
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

// router.delete('/:id', (req,res)=>{
//     let id = req.params.id
//     User.findByIdAndDelete(id)
//     .then((user)=> {
//         res.send(user)
//     })
//     .catch((err) => {
//         res.send(err)
//     })
// })

module.exports = {
    usersRouter: router
}
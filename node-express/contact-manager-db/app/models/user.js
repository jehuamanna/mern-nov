const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const {Schema } = mongoose
const jwt = require('jsonwebtoken')

const userSchema = new Schema ({
    username: {
        type: String,
        minlength : 5,
        required: true
    },
    email:{ 
        type: String,
        required: true,
        unique: true,  
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: function(){
                return 'invalid email format'
            }
        }

    },
    password : {
        type: String,
        minlength: 8,
        maxlength : 128
    },
    createdAt: {
        type:Date,
        default: Date.now
    },
    tokens: [
        {
            token:{
                type:String
            }
        }
    ]

})

userSchema.pre('save', function(next){
    if(this.isNew){
        bcryptjs.genSalt(10)
        .then(salt => {
            bcryptjs.hash(this.password , salt)
            .then(hashedPassword => {
                this.password = hashedPassword
                next()
            })
        }).catch(err => console.log(err))
    } else{
        next()
    }
})


userSchema.statics.findByEmailAndPassword = function(email, password) {
    const User = this
    return User.findOne({email})
        .then((user) =>{
            if(user) {
                return bcryptjs.compare(password, user.password).then((result) =>{
                    if(result){
                        // return new Promise((resolve, reject) => {
                        //     resolve(user)
                        // })
                        return Promise.resolve(user)
                    } else{
                        // return new Promise((resolve, reject) => {
                        //     reject('invalid email or password')

                        // })
                        return Promise.reject('invalid email or password')
                    }
                })
            } else {
                // return new Promise((resolve, reject)=>{
                //     reject('invalid email or password')
                // })
                return Promise.reject('invalid email or password')
            }
        })
        .catch((err) => {
                return Promise.reject(err)
        })
}


userSchema.statics.findByToken = function(token) {
    const User = this
    let tokenData
    try {
        tokenData = jwt.verify(token, 'dct@welt533')
    }
    catch(err) {
        return Promise.reject(err)
    }

    return User.findOne({
        _id: tokenData.userId,
        'tokens.token': token
    })
        .then((user) => {
            return Promise.resolve(user)
        })
        .catch((err) =>{
            return Promise.reject(err)
        })
}



userSchema.methods.generateToken = function(){
    const user = this
    const tokenData = {
        userId: user._id
    }
    const token = jwt.sign(tokenData, 'dct@welt533')
    user.tokens.push({
        token
    })
    return user.save().then((user) =>{
        return token 
    }).catch((err) =>{
        return err
    })
}

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}
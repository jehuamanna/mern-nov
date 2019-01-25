const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const {Schema } = mongoose

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
    }

})

userSchema.pre('save', function(next){
    bcryptjs.genSalt(10)
    .then(salt => {
        bcryptjs.hash(this.password , salt)
        .then(hashedPassword => {
            this.password = hashedPassword
            next()
        })
    }).catch(err => console.log(err))
})


userSchema.statics.findByEmailAndPassword = function() {
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
const User = mongoose.model('User', userSchema)

module.exports = {
    User
}
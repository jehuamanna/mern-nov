const bcryptjs = require('bcryptjs')

const hashedPassword = function ()  {
    return bcryptjs.genSalt(10).then((salt) => {
        return bcryptjs.hash("opk", salt)
            .then((hashedPassword) => {
                return hashedPassword
            })
    })
}

hashedPassword().then((password) => {console.log(password)})
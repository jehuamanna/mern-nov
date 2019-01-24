const express = require('express')
require('./config/database')
const useragent = require('express-useragent')
const port = 3001
const app = express()
app.use(express.json())
app.use(useragent.express())

const { bookmarkRouter} = require('./app/controllers/url-controller')
const { rootUrlRouter } = require('./app/controllers/root-url-controller')
const { tagsRouter} = require('./app/controllers/tags-url-controller')



// app.use('/bookmarks/tags', tagsRouter)
app.use('/bookmarks', bookmarkRouter)
app.use('/', rootUrlRouter)
app.listen(port, () => {
    console.log('server is up and running in port ', port)
})
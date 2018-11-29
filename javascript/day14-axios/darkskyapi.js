const axios = require('axios')

let url = `https://api.darksky.net/forecast/ba4a488b3ec19f6c8c970c7bcfa5dfc8/37.8267,-122.4233`

axios.get(url).then(function(response){
    data = response.data
    temperature = data.currently.temperature
    temperature = (temperature -32)*5/9
    console.log(temperature)
}).catch(function(err){
    console.log(err.message)
})
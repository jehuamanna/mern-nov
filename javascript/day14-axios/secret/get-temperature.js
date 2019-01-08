const axios = require('axios')
console.log(process.argv)
let url = `http://www.mapquestapi.com/geocoding/v1/address?key=A3lkhzw6pGokKkOIaGEUeDmWZecNhHpd&location=${process.argv[2]}`
latLng = {}
axios.get(url).then(function(response){
    latLng.lat = response.data.results[0].locations[0].latLng.lat
    latLng.lng = response.data.results[0].locations[0].latLng.lng
    let url = `https://api.darksky.net/forecast/ba4a488b3ec19f6c8c970c7bcfa5dfc8/${latLng.lat},${latLng.lng}`
    console.log(url)
    axios.get(url).then(function(response){
        data = response.data
        temperature = data.currently.temperature
        temperature = (temperature -32)*5/9
        console.log(temperature)
    })
}).catch(function(err){
    console.log(err.message)
})


const axios = require('axios')

let url = `http://www.mapquestapi.com/geocoding/v1/address?key=A3lkhzw6pGokKkOIaGEUeDmWZecNhHpd&location=${process.argv[2]}`
axios.get(url).then(function(response){
    console.log(`Latitude is : ${response.data.results[0].locations[0].latLng.lat}`)
    console.log(`Longitude is : ${response.data.results[0].locations[0].latLng.lng}`)

})
const axios = require('axios')

let program = require('commander');
name = process.argv[2]

    let url = `https://gender-api.com/get?name=${name}&key=pRPLCejozFwCHFbVCR`
    axios.get(url).then(function(response){
        data = response.data
        console.log(`The gender for the ${name} is ${data.gender}`)
    })


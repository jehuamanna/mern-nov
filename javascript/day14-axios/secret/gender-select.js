const axios = require('axios')

var program = require('commander')
 
program
    .option('-n, --name [type]', 'Name of the person', 'Jehu')
    .parse(process.argv)

    let url = `https://gender-api.com/get?name=${program.name}&key=pRPLCejozFwCHFbVCR`
axios.get(url).then(function(response){
    let data = response.data
    console.log(`The gender for the ${program.name} is ${data.gender}`)
}).catch(function(err){
    console.log(err.message)
})


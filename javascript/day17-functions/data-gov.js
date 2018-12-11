const axios = require('axios')

let offset = 0
console.log("hi")
let url = `https://api.data.gov.in/resource/8d308158-28aa-4bcf-9e98-948b029340ad?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=${offset}&limit=10`
console.log("hi")

let totalRecords=0
axios.get(url).then(function(response){
    let data = response.data
    totalRecords = data.total
    console.log(`Total number of records is ${totalRecords}`)

    for(let i = 0; i<=totalRecords; i += 10){
        offset = i
        let url = `https://api.data.gov.in/resource/8d308158-28aa-4bcf-9e98-948b029340ad?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=${offset}&limit=10`
        axios.get(url).then(function(response){
            let records = response.data.records
            records.forEach(function(record){
                console.log(`State name: ${record.statename}\nNo of LED bulbs: ${record.ledbulbsdistributed}`)
            })
        }).catch(function(err){
            console.log(err.message)
        })
    }
    


}).catch(function(err){
    console.log(err.message)
})


for(let i = 0; i<=totalRecords; i += 10){
    offset = i
    let url = `https://api.data.gov.in/resource/8d308158-28aa-4bcf-9e98-948b029340ad?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=${offset}&limit=10`
    axios.get(url).then(function(response){
        let records = response.data.records
        records.forEach(function(record){
            console.log(`State name: ${record.statename}\nNo of LED bulbs: ${record.ledbulbsdistributed}`)
        })
    }).catch(function(err){
        console.log(err.message)
    })
}

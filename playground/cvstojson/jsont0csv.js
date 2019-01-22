let csvToJson = require('convert-csv-to-json')
let fileInputName = 'hotels.csv'
let fileOutputName = 'hotels.json'
csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName)

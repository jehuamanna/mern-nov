const fs = require('fs')
const path = require('path')
var csvjson = require('csvjson');

var data = fs.readFileSync(path.join(__dirname, 'hotels.csv'), { encoding : 'utf8'});

var options = {
  delimiter : ',', // optional
  quote     : '"' // optional
};


data = csvjson.toObject(data, options);

fs.writeFile('hotels.json', JSON.stringify(data), function(err) {
  if (err) {
     return console.error(err);
  }  
});


var fs = require("fs");

// Asynchronous read
fs.readFile('contacts.json', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});
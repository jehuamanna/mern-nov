var fs = require("fs");

console.log("Going to write into existing file");
contacts = [{id:1, name:'jehu', contact: 9008141866}]
fs.writeFile('input.txt', JSON.stringify(contacts), function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});
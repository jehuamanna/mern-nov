var program = require('commander');
 
program
  .command('n <dir>')
  .action(function (dir, cmd) {
    console.log('remove ' + dir )
  })
 
program.parse(process.argv)
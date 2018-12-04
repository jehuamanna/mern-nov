var program = require('commander');
 
program
  .version('0.1.0')
  .option('-n, --name [type]', 'Enter the name', 'Jehu')
  .arguments('<cmd> [env]')
  .action(function (cmd, env) {
     cmdValue = cmd;
     envValue = env;
  }).parse(process.argv);


if (typeof cmdValue === 'undefined') {
    console.error('no command given!');
    console.error('Usage:');
  console.error('  name <name>');
    process.exit(1);
 }
 console.log('command:', cmdValue);
 console.log('environment:', envValue || "no environment given");
 
console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);




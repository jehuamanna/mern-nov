// console.log(process)

let names = process.argv.slice(2)
console.log('Printing arguments')
names.forEach(function(name){
    console.log(name)
})
// console.log('hi ' + names[0] + ' ' + names[1])
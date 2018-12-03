let city = 'banglaore'

for( let char of city){
    console.log(char)
}

let names = ['ramesh', 'rajesh', 'suresh']
for ( let name of names) {
    console.log(name.toUpperCase())
}
console.log(names.entries())
for( let [index, shark] of names.entries()){
    console.log(index, shark)
}
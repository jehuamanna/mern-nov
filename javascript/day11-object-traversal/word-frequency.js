const sentence = 'virat virat sachin virat sachin dhoni sachin'

let result = {}
const players = sentence.split(' ')
// console.log(players)

players.forEach(function(name){
    if(result[name]) {
        //if(result.hasOwnProperty(name)) {
        result[name] += 1
    }
    else 
        result[name] = 1
})

for( let player in result){
    console.log(`${player} - ${'*'.repeat(result[player])}`)
}

console.log(result)
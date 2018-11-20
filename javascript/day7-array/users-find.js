const users = ['arjun', 'ravisha', 'ramesh', 'sonali']

let userToFind = 'ramesh'

// 1 - indexOf
if(users.indexOf(userToFind) >= 0) {
    console.log(userToFind + ' found in the array')
}
else {
    console.log(userToFind + ' not found in the array')
}

// 2- includes
if( users.includes(userToFind)) {
    console.log(userToFind + ' found in the array')
}
else {
    console.log(userToFind + ' not found in the array')
}


// traditional c programming style
let isFound = false
for( let i =0; i< users.length; i++){
    if(users[i] == userToFind){
        isFound = true
        break
    }
}

if(isFound == true) {

}

// javascript style

let userFound = users.find(function(name){
    return name == userToFind
})
console.log(userFound)
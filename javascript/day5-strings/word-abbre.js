let username = 'arjun nagarajan'

let arrayNames = username.split(' ', 2 )
let initials = ''
arrayNames.forEach(function (name){
    initials += name.charAt(0).toUpperCase()
})

console.log(initials)
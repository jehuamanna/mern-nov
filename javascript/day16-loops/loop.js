/*
for (initialization, condition, incrementation/decrementation) {
    body of the loop
}
*/

// display from 1 to 10
for ( let i = 1; i<=0;i++){
    console.log(i)
}

// display all evens from 0 to 20
for(let i = 0; i<=0; i++){
    if(i%2 == 0){
        console.log(i)
    }
}


// display all evens from 0 to 20
for( let i = 0; i<=20;i=i+2){
    console.log(i)
}


// displaying numbers in reverse order

for(let i = 10; i>0;i--){
    console.log(i)
}

//loop over a string
const city = 'bangalore'
for(let i =0; i < city.length; i++){
    console.log(`${i} ${city[i]}`)
}

// association proxy / daisy chaining = ability to chain methods

city.split('').reverse().join('')

// reverse a string

let name = 'jehu'
let result = ''
for(let i = name.length-1;i>=0;i--){
    result += name[i]
}

console.log(result)



let names = ['suresh', 'mahesh', 'veeresh', 'rajesjh', 'ganesh']
for(let i = 0;i<names.length;i++){
    console.log(names[i])
}

let users = [
    { id: 1, username: 'adam', gender: 'm'},
    { id: 2, username: 'sarah', gender: 'f'},
    { id: 3, username: 'kevin', gender: 'm'}
]

for( let i = 0; i< users.length; i++){
    console.log(users[i].id, users[i].username)
}
//es5
// var user = {
    // firstName: 'arjun',
    // lastName: 'reddy',
    // city: 'kadapa'
// }

// var firstName = user.firstName
// var lastName = user.lastName

// console.log(firstName, lastName)

// es6
const user = {
    firstName: 'arjun',
    lastName: 'reddy',
    city: 'kadapa'
}

// object destructuring 
// const {firstName, lastName} = user
// console.log(firstName, lastName)

// when you do not want the same name as the property

const { firstName:fName, lastName:lName} = user
console.log(fName, lName)



//advantage of this.
const person={
    firstName : 'rahul',
    address: {
        city: 'bangalore',
        temp:24
    }
}

if(person.address.temp>20){
    console.log(`the temperature in ${person.address.city} is ${person.address.temp}`)
}

const {city, temp} = person.address

if(temp>20){
    console.log(`the temperature in ${city} is ${temp}`)
}
// Create an object called a person
// properties - firstName, lastName
// method - greet()

// person.greet() // 'Hello, firstName lastName'

const person = {
    firstName: 'Jehu',
    lastName: 'Amanna',
    greet: function(){
        return `Hello ${this.firstName} ${this.lastName}`
    }
}

console.log(person.greet())
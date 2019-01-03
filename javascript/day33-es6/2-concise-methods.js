///object concise methos
// es5
var person = {
    firstName: 'rahul',
    lastName: 'dravid',
    details: function () {
        return this.firstName + ' ' + this.lastName
    },
    greet: function () {

    }
}

console.log(person.details())

//es6
const person = {
    firstName: 'rahul',
    lastName: 'dravid',
    details() {
        return `${this.firstName} ${this.lastName}`

    },
    greet(name){
        return `Hello ${name}, iam ${this.firstName}`
    }
}
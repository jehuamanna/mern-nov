const person = { 
    name: 'Arjun',
    // Whenever a propety inside an object, is holding function as its value, its termed as method
    greet: function() {
        return 'from inside the function'
    }
}


console.log(person.name) // 'Arjun'
console.log(person.greet) // [Function: greet]
// greet is property / a methods
console.log(person.greet())

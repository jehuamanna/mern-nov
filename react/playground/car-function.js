// method - start, stop

function Car(data) {
    this._id = Math.round(Math.random())
    this.name = data.name
    this.make = data.make

    // instance methods

    this.start = function() {
        return `${this.name} has started `
    }
    this.stop = function() {
        return `${this.name} has stopped`
    }
    Car.wheels = 4

}

// properties on type
Car.wheels = 4
//method at type level, class methods
Car.family = function() {
    return `Car belongs to vehicle family`
}

let c1 = new Car({name:'swift', make:'honda'})
console.log(c1.start())
console.log(c1.stop())
let c2 = new Car({name:'civic', make: 'idk'})
console.log(c2.name)
console.log(c2.start())
console.log(Car.wheels)

console.log(c1.name)
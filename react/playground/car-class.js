class Car{
    constructor(data){
        this.make = data.make
        this.name = data.name
    }
    // instance methods || object methods
    start() {
        return `${this.name} has started`
    }

    // instance methods || object methods

    stop(){
        return `${this.name} has stopped`
    }

    // class methods || static methods
    static family(){
        return `Car belongs to vehicle family`
    }

}

// properties on type
Car.wheels = 4

let c1 = new Car({name: 'swift', make: 'honda'})
console.log(c1.start())
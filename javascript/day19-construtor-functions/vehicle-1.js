function Vehicle(data){
    this.name = data.name
    this.fuel = data.fuel
    this.manufacturer = data.manufacturer
    this.type = data.type
    this.start = function (){
        return `${this.name} has started`
    }

    this.stop = function() {
        return `${this.name} has stopped`
    }

    this.move = function() {
        return `${this.name} is moving`
    }
}

let c1 = new Vehicle({fuel: 'petrol', type: 'hatch', name: 'swift', manufacturer:'maruthi'})
console.log(c1)
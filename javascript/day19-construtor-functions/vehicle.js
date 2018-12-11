function Vehicle(name, fuel, manufacturer, type){
    this.name = name
    this.fuel = fuel
    this.manufacturer = manufacturer
    this.type = type
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

let c1 = new Vehicle('swift', 'petrol', 'maruthi', 'hatch')
console.log(c1.start())

let c2 = new Vehicle('civic', 'petrol', 'honda', 'sedan')
console.log(c2.fuel, c2.start())

let c3 = new Vehicle()
c3.name = 'fortuner'
c3.fuel = 'diesel'
c3.manufacturer = 'toyota'
c3.type = 'suv'
console.log(c3.start())

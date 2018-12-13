function Rover(a,b,c,d){
    //type code here
    this.currentState = { x: a, y: b, d: c }
    this.direction = d
    this.orientation = {
        L: { N: 'W', W: 'S', S: 'E', E: 'N' },
        R: { N: 'E', E: 'S', S: 'W', W: 'N' }
    }
    
    
    this.move = function() {
        if (this.currentState.d == "E") {
            this.currentState.x += 1
        }
        if (this.currentState.d == "W") {
            this.currentState.x -= 1
        }if (this.currentState.d == "S") {
            this.currentState.y -= 1
        }if (this.currentState.d == "N") {
            this.currentState.y += 1
        }
    }
    
    this.turnRight = function(){
        this.currentState.d = this.orientation['R'][this.currentState.d]
    }
    
    this.turnLeft = function() {
        this.currentState.d = this.orientation['L'][this.currentState.d]
    }
    
    
    this.play = function() {

        for (let i = 0; i < this.direction.length; i++){
            if (this.direction[i] == 'M') {
                this.move()
            }
            if (this.direction[i] == 'R') {
                this.turnRight()
            }
            if (this.direction[i] == 'L') {
                this.turnLeft()
            }
        }
    }
    this.result = function() {
        return `${this.currentState.x} ${this.currentState.y} ${this.currentState.d}`
    }
}


let marsRover = new Rover(1,2,'N','LMLMLMLMM')
marsRover.play()
console.log(marsRover.result())
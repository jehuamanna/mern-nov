const counter = {
    value: 0,
    up: function() {
        // inside a function defined inside an object, the value of this refers to the current object
        return this.value += 1
    },
    down: function() {
        return this.value -= 1
    },
    reset: function() {
        return this.value = 0
    },
    moveUpBy: function(n){
        return this.value += n
    },
    moveDownBy: function(n){
        return this.value -= n
    }
}

console.log(counter.up())
console.log(counter.up())
console.log(counter.down())
console.log(counter.reset())
console.log(counter.moveUpBy(4))
console.log(counter.moveDownBy(2))
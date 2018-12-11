function Player(inputName, inputRuns, inputCountry){
    this.name = inputName
    this.runs = inputRuns
    this.country = inputCountry
    this.totalMatches = function() {
        return this.runs.length
    }
    this.avgRuns = function() {
        let total = 0
        this.runs.forEach(function(score) {
            total += score
        })
        return total / this.runs.length
    }

}

let p1 = new Player('virat', [30, 40, 60], 'india')
console.log(p1.name, p1.runs, p1.country)
console.log(p1.totalMatches())
console.log(p1.avgRuns())
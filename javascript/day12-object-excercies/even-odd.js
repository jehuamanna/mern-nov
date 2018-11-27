const nums = {
    values : [10, 20, 15, 25, 40],
    getEvens: function(){
        return this.values.filter(function(value){
            return value % 2 ==0
        })
    },
    getOdds: function(){
        return this.values.filter(function(value){
            return value % 2 != 0
        })
    }
}

console.log(nums.getEvens())
console.log(nums.getOdds())

const person = {
    name: 'rakesh',
    skills: ['py', 'rb', 'js'],
    getSkills: function() {
        let name = this.name
        let output = ''
        //  This will work
            this.skills.forEach(function(skill){
            output += `${this.name} knows ${skill}\n` 
        }.bind(this))
        /*this.skills.forEach(function(skill){
            output += `${name} knows ${skill}\n` 
        })*/
        /*
        for(let i = 0; i<this.skills.length;i++){
            output += `${this.name} knows ${this.skills[i]}\n`
        }*/

        return output
    }
}
console.log(person.getSkills())
console.log('\r')
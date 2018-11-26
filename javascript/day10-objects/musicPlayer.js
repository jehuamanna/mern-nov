let walkMan = {
    songCollection : ['4 Springs', 'Ode to Joy', 'Yeenagali munde saagu nee', 'moon light'],
    currentlyPlaying : 'Ode to Joy',
    start: function(){
            console.log(`Playing song ${this.currentlyPlaying}.`)
    },
    pause: function(){
        console.log(`Paused ${this.currentlyPlaying}.`)
    },
    stop: function(){
        console.log(`Stopped ${this.currentlyPlaying}.`)
    },
    shuffle: function() {
        this.currentlyPlaying =  this.songCollection[(Math.floor(Math.random() *10)) % this.songCollection.length]
    }
}
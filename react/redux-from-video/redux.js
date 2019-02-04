const store = {
    state: { 
        count: 0
    },
    getState: function() {
        return this.state   
    },
    dispatch: function(action) {
        
    }
}


console.log(store.getState())
store.increment()
console.log(store.getState())
store.decrement()
console.log(store.getState())
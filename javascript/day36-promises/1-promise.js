// for promise - we pass function as argument.
    // that passed function will need to be provided, with 2 arguments
    // resolve & reject, both of them happen to be functions


// promise object will be in different states
// pending - when the object is created
// it can either be in resolved (fullfilled) or rejected

const myPromise = new Promise(function(resolve, reject){
    setTimeout( () =>{
        const random = Math.round(Math.random() * 10)
        if(random %2 == 0){
            resolve (random)
        }
        else {
            reject(random)
        }
    }, 0)
})

myPromise
    .then(function(n){
        console.log('even', n)
    })
    .catch(function(n){
        console.log('odd', n)
    })
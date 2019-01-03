// function scope not block scoped
console.log(msg) // undefined // because vairable msg is hoisted
if(20>10){
    var msg = '20 is greater than 10'
}

console.log(msg) // 20 is greater than 10

add()

//function declaration  is also hoisted ie moved to the top ofn execution by javascript runtime

function add(){
    console.log('Im adding')
}

console.log(multiply) // undefined
// multiply() // mutiply is not afunction

// function express is not hoisted
var multiply = function(){
    console.log('im multiplying')
}
multiply()
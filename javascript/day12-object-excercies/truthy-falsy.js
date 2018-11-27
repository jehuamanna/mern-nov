//falsy - false, undefined, 0, null, NaN, ''
// truthy - 1, true, {}, [], all numbers except 0,

const values = [1,0,true, false, -1, 10, [], {}, '', 'dct acamdemy', undefined, null, NaN]

let truthyValues = []
let falsyValues = []
values.forEach(function(val){
    if(val){
        truthyValues.push(val)
    }
    else{
        falsyValues.push(val)
    }
})
console.log('truthy values ', truthyValues)
console.log('falsy values', falsyValues)
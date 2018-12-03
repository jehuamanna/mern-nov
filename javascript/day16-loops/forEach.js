let fruits = ['apple', 'watermelon', 'chickoo']

fruits.forEach(function(fruit,index){
    console.log(index, fruit)
})

let tags = 'js rb py'
tags.split(' ').forEach(function(tag, i, arr){
    console.log(tag, i, arr)
})

let city = 'bangalore'
city.split('').forEach(function(char){
    console.log(char)
})
/*
Color plays an important role in our lifes. Most of us like this color better then another. Uer experience specialists believe that certain colours have certain psychological meaning for us.
You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you write needs to return the colour as 'key' and association as its 'value'.
For example:
array = [['white', 'goodness'], ['blue', 'tranquility']]
*/


array = [['white', 'goodness'], ['blue', 'tranquility'], ['pink', 'love'], ['green', 'nature'], ['red', 'danger']]
result = {}
array.forEach(function(colorMatch){
    result[colorMatch[0]] = colorMatch[1]
})
console.log(result)
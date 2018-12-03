

function fbLikes(likes){
    let text = ''
    if(likes.length == 0) {
        text = 'No one likes this'
    }
    else if(likes.length == 1) {
        text = `${likes[0]} likes this`
    }
    else if(likes.length == 2) {
        text = `${likes[0]} and ${likes[1]} like this`
    }
    else if(likes.length == 3) {
        text = `${likes[0]}, ${likes[1]} and ${likes[2]} like this`
    }
    else {
        text = `${likes[0]}, ${likes[1]} and ${likes.length-2} others like this`
    }
    return text
}


console.log(fbLikes([]))
console.log(fbLikes(['Peter']))
console.log(fbLikes(['Jacob', 'Alex']))
console.log(fbLikes(['Max', 'John', 'Mark']))
console.log(fbLikes(['Alex', 'Jacob', 'Mark', 'Mark']))
console.log(fbLikes(['Ravi', 'Alex', 'Jacob', 'Mark', 'Mark']))
let slogan = 'make in india'

function generateHashTag(slogan) {

    let hashTag = '#'

    let arraySlogan = slogan.split(' ')
    for (let i = 0; i< arraySlogan.length; i++){
        hashTag += arraySlogan[i].charAt(0).toUpperCase() + arraySlogan[i].slice(1).toLowerCase()
    }
    return hashTag
}

console.log(generateHashTag(slogan))

function isVowel(c) {
    vowels = 'aeiouAEIOU'
    flag = false
    if (vowels.includes(c)) {
        flag = true
    }
    return flag
}


function reverseVowels(a) {
    let vowels = []
    a = a.split('')
    for (let i = 0; i < a.length; i++){
        if (isVowel(a[i])) {
            vowels.push(a[i])
        }
    }
    vowels.reverse()
    for (let i = 0; i < a.length; i++){
        if (isVowel(a[i])) {
            a[i] = vowels.shift()
        }
    }
    a = a.join('')
    return a
}

console.log(reverseVowels("Reverse Vowels In A String"))
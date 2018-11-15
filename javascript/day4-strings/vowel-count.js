const word = 'This is some sentence'
const vowels = 'aeiou'
let count = 0
let vcount = 0

for(let c of word){
    if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'){
        vcount++
    }
}

for(let i = 0; i<word.length; i++){
    if(word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u'){
        count++
    }
}

// for ( let i =0; i < word.length; i++){
//     if(vowels.includes(word[i])){
//         count++
//     }
// }

console.log('No of vowels ' + count)
console.log('Vowel count ' + vcount)

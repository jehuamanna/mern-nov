let inputString = "appearance"

let result = ''

for( let i = 0; i<inputString.length - 1; i++){
    // for (let j = i+1; j<inputString.length; j++){
    //     if(inputString[i] == inputString[j] && !result.includes(inputString[i])){
    //         result += inputString[j]
    //     }
    // }
    let c = inputString.charAt(i)
    if(inputString.slice(i+1).includes(c) && !result.includes(c)){
        result += c
    }
}

console.log(result)
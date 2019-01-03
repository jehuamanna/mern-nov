// console.log(msg) Reference Error
// let variables are not hoisted

let greaterNum //2
if(20>10){
    let msg = '20 is greater than 10' //1
    greaterNum = 20//2
    console.log(msg) // 1
    //let msg = 'another msg' Identifier 'msg' has already been declared
}

//console.log(msg) Reference Error // 1
console.log(greaterNum) //2
greaterNum = 30
console.log(greaterNum)

let add = function(){
    console.log('im adding')
}
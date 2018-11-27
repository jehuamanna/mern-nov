const winnerList = [
    { "season": "1999-00", "team": "real madrid", "country": "Spain" },
    { "season": "2000-01", "team": "bayern munich", "country": "Germany" },
    { "season": "2001-02", "team": "real madrid", "country": "Spain" },
    { "season": "2002-03", "team": "milan", "country": "Italy" },
    { "season": "2003-04", "team": "porto", "country": "Portugal" }
]

function countWins(winnerList, countryName){
    let count = 0
    winnerList.forEach(function(winnerDetails){
        if(winnerDetails.country == countryName){
            count++
        }
    })
    return count
}

// Using filter method
function countWins2(winnerList, countryName){
    let result = winnerList.filter(function(winnerDetails){
        return winnerDetails.country == countryName
    })
    return result.length
}

function countWins3(winnerList, countryNameList){
    let result = {}
    countryNameList.forEach(function(countryName){
        let result1 = winnerList.filter(function(winnerDetails){
            return winnerDetails.country == countryName
        })
        result[countryName] = result1.length
    })
    return result
}

console.log(countWins(winnerList,'Spain'))
console.log(countWins2(winnerList,'Germany'))

console.log(countWins3(winnerList, ['Spain', 'Germany', 'Spotland']))
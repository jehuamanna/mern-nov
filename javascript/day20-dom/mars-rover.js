function rover(a,b,c,d){
    //type code here
        let currentState = { x: a, y: b, d: c }
        let orientation = {
            L: { N: 'W', W: 'S', S: 'E', E: 'N' },
            R: { N: 'E', E: 'S', S: 'W', W: 'N' }
        }
        for (let i = 0; i < d.length; i++){
            if (d[i] == 'M') {
                if (currentState.d == "E") {
                    currentState.x += 1
                }
                if (currentState.d == "W") {
                    currentState.x -= 1
                }if (currentState.d == "S") {
                    currentState.y -= 1
                }if (currentState.d == "N") {
                    currentState.y += 1
                }
            }
            else if (d[i] == 'R') {
                currentState.d = orientation['R'][currentState.d]
            }
            else  {
                currentState.d = orientation['L'][currentState.d]
            }
            console.log(currentState)
        }

        return `${currentState.x} ${currentState.y} ${currentState.d}`
    }

    console.log(rover(1,2,'N',"LMLMLMLMM"))
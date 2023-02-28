function solution(s){
    let cntP = 0
    let cntY = 0
    for (let i of s) {
        if (i === 'p' || i === 'P')
            cntP ++
        else if (i === 'y' || i === 'Y')
            cntY ++
    }
    return cntP === cntY ? true : false
}
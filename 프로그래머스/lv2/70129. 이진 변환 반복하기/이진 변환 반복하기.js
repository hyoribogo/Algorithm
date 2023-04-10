function solution(s) {
    let cntNum = 0, cntZero = 0
    while(s !== "1") {
        cntZero = s.match(/0/g) ? cntZero + s.match(/0/g).length : cntZero
        s = s.match(/1/g).length.toString(2)
        cntNum++
    }
    return [cntNum, cntZero]
}
function solution(number, limit, power) {
    const powerArr = [0, 1]
    for(let i = 2; i <= number; i++) 
        powerArr[i] = cntDiv(i) > limit ? power : cntDiv(i)
    return powerArr.reduce((a, c) => a + c)
}

function cntDiv(n) {
    let cnt = 0
    for(let i = 1; i < Math.sqrt(n); i++)
        cnt += !(n % i) ? 2 : 0
    if(Number.isInteger(Math.sqrt(n)))
        cnt++
    return cnt
}
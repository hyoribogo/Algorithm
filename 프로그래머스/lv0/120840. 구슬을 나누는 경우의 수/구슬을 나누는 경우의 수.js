function solution(balls, share) {
    let n1 = BigInt(1)
    let n2 = BigInt(1)
    for(let i = balls; i > share; i--)
        n1 *= BigInt(i)
    for(let i = 1; i <= balls - share; i++)
        n2 *= BigInt(i)
    return n1 / n2
}
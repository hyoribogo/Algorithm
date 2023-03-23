function solution(n) {
    let cnt = 0
    let sum = 0
    for(let i = 1; i <= n; i++) {
        sum = 0
        for (let j = i; j <= n; j++) {
            sum += j
            if(sum > n) break
            if(sum === n) {
                sum = 0
                cnt++
                break
            }
        }
    }
    return cnt
}
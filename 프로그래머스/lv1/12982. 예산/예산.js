function solution(d, budget) {
    if (d.reduce((arr, curr) => arr + curr) < budget) return d.length
    d = d.sort((a, b) => a - b)
    let cnt = 0
    
    while(budget > 0) {
        budget -= d[cnt++]
    }
    
    return budget < 0 ? cnt - 1 : cnt
}
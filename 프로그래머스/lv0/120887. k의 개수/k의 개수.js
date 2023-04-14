function solution(i, j, k) {
    let cnt = 0
    
    for(; i <= j; i++)
        cnt += [...i.toString()].filter(i => i === k.toString()).length
    
    return cnt
}
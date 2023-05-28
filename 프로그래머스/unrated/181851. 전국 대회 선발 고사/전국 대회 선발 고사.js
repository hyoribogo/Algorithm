function solution(rank, attendance) {
    const result = []
    attendance.forEach((v, i) => {
        if(v)
            result.push([rank[i], i])
    })
    result.sort((a, b) => a[0] - b[0])
    
    
    return result[0][1] * 10000 + result[1][1] * 100 + result[2][1]
}
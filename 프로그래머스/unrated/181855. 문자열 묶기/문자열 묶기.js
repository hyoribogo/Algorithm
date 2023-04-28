function solution(strArr) {
    const sum = {}
    strArr.forEach(str => sum[str.length] = (sum[str.length] || 0) + 1)
    return Math.max(...Object.values(sum))
}
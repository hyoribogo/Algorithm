function solution(n) {
    let result = 0
    for (let i = 1; i <= n; i++) {
        result++
        while(!(result % 3) || result.toString().includes('3')) {
            result++
        }
    }
    return result
}
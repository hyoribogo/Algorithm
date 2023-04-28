function solution(arr) {
    let result = []
    for(let n of arr) {
        for(let i = 0; i < n; i++)
            result.push(n)
    }
    return result
}
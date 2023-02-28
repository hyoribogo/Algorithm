function solution(s) {
    let result = ""
    let a = [...s].sort((a, b) => a < b ? 1 : -1)
    for (let i of a)
        result += i
    return result
}
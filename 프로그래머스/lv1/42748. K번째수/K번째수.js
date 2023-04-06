function solution(array, commands) {
    let result = []
    
    for(let [i, j, k] of commands)
        result.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1])
    
    return result
}
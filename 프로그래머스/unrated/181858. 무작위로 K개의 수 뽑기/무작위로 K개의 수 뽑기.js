function solution(arr, k) {
    let result = new Set()
    for(let i of arr) {
        result.add(i)
        if(result.size === k)
            return [...result]
    }
    result = [...result]
    for(let i = result.length; i < k; i++) {
        result.push(-1)
    }
    return result
}
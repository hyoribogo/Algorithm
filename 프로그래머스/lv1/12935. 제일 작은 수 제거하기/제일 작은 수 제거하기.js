function solution(arr) {
    if (arr.length === 1) return [-1]
    let min = Number.MAX_SAFE_INTEGER
    let idx = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i]
            idx = i
        }
    }
    arr.splice(idx, 1)
        
    return arr;
}
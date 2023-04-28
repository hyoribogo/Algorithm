function solution(arr, queries) {
    for(let [start, end] of queries) {
        for(let i = start; i <= end; i++)
            arr[i]++
    }
    
    return arr
}
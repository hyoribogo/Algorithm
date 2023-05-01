function solution(arr, queries) {
    for(let [s, e, k] of queries) {
        while(s <= e) {
            if(!(s % k))
                arr[s]++
            s++
        }
    }
    return arr
}
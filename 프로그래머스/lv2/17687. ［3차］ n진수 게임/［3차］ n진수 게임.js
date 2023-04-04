function solution(n, t, m, p) {
    let result = "";
    let arr = "";
    
    for(let i = 0; i < t * m; i++)
        arr += i.toString(n);
        
    for(let i = 0; i < t; i++) {
        result += arr[p - 1]
        arr = arr.slice(m)
    }
    
    return result.toUpperCase()
}
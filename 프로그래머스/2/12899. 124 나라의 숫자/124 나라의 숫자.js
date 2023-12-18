function solution(n) {
    let result = ""
    const arr = ["4", "1", "2"]
    while (n > 0) {
        result = arr[n % 3] + result
        n = Math.floor((n - 1) / 3);
    }
    return result
}
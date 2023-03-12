function solution(n) {
    let arr = [, , ,]
    for (let i = 4; i <= n; i += 2) arr[i] = false
    for (let i = 3; i <= n; i += 2) arr[i] = isPrime(i)
    return arr.filter(i => i === false).length
}

function isPrime(n) {
    for (let i = 3; i < n; i += 2) {
        if (n % i === 0) return false
    }
    return true
}
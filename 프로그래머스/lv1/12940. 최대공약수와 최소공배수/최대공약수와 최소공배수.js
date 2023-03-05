function solution(n, m) {
    let a = gcd(m, n)
    return [a, n * m / a]
}

function gcd(a, b) {
     return b ? gcd(b, a % b) : a
}
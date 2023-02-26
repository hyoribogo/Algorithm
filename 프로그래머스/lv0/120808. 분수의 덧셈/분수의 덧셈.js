function solution(numer1, denom1, numer2, denom2) {
    let num = numer1 * denom2 + numer2 * denom1
    let den = denom1 * denom2
    let quo = gcd(num, den)
    return [num / quo, den / quo]
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a%b)
}

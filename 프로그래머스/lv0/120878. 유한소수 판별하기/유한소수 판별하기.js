function solution(a, b) {
    gcdNum = gcd(a, b)
    b /= gcdNum
    while(b > 1) {
        if (b % 2 === 0)
            b /= 2
        else if (b % 5 === 0)
            b /= 5
        else
            return 2
    }
    return 1
}

function gcd(a, b) {
    return b ? gcd(b, a % b) : a
}
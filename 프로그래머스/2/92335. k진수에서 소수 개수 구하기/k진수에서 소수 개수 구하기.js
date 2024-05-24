function solution(n, k) {
    return n.toString(k)
        .split(/0+/g)
        .filter((i) => i.length && isPrime(Number(i)))
        .length
}

const isPrime = num => {
    if (num === 2) return true
    if (num === 1 || !(num % 2)) return false
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (!(num % i)) return false
    }
    
    return true
}
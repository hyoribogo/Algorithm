const solution = n => {
    let result = new Set()
    let prime = 2
    while (n > 1) {
        if (n % prime) prime++
        else {
            n /= prime
            result.add(prime)
            prime = 2
        }
    }
    return [...result]
}

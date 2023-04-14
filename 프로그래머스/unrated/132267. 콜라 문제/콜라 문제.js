function solution(a, b, n) {
    let getCola = 0
    
    while(n >= a) {
        getCola += ~~(n / a) * b
        n = ~~(n / a) * b + n % a
    }
    
    return getCola
}
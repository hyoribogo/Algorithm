function solution(a, b) {
    let result = 0;
    [a, b] = a < b ? [a, b] : [b, a]
    for (let i = a; i <= b; i++)
        result += i
    return result
}
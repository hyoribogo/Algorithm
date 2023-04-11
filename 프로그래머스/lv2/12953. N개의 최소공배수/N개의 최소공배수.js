function solution(arr) {
    if(arr.length === 1) return arr[0]
    let l = lcm(arr[0], arr[1])
    for(let i = 2; i < arr.length; i++)
        l = lcm(l, arr[i])
    return l
}
const lcm = (a, b) => a * b / gcd(a, b)
const gcd = (a, b) => b ? gcd(b, a % b) : a
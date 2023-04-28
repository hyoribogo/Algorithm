function solution(a, b) {
    const ab = +(a.toString() + b.toString())
    return Math.max(ab, 2 * a * b)
}
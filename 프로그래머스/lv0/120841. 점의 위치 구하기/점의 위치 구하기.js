function solution(dot) {
    const n = [[3, 2], [4, 1]]
    return n[+(dot[0] > 0)][+(dot[1] > 0)]
}
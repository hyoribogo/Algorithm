function solution(num) {
    if (num === 1) return 0
    let cnt = 0
    for (let i = 0; i < 500; i++){
        num = num % 2 ? num * 3 + 1 : num / 2
        cnt++
        if (num === 1) return cnt
    }
    return -1
}
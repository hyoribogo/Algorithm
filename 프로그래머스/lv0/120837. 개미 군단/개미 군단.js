function solution(hp) {
    let cnt = 0
    if (hp >= 5){
        cnt += Math.floor(hp / 5)
        hp %= 5
    }
    if (hp >= 3) {
        cnt += Math.floor(hp / 3)
        hp %= 3
    }
    return cnt + hp
}
const solution = sides => {
    let result = 0
    // sides 의 값이 최댓값일 경우
    const long = Math.max(...sides)
    const another = Math.min(...sides)
    for (let i = long - another + 1; i <= long; i++) {
        result++
    }
    
    // 남은 변이 가장 긴 변일 경우
    for (let i = sides[0] + sides[1] - 1; i > long; i--){
        result++
    }
    return result
}
function solution(binomial) {
    let answer = binomial.split(" ")
    return answer[1] === "+" ? 
        +answer[0] + +answer[2] : answer[1] === "-" ? 
        +answer[0] - +answer[2] : +answer[0] * +answer[2]
}
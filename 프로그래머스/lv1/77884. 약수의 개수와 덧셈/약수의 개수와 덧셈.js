function solution(left, right) {
    let answer = 0
    let power = []
    for(let i = 1; i <= Math.sqrt(1000); i++)
        power.push(i * i)
    
    for(let i = left; i <= right; i++) {
        if(power.includes(i))
            answer -= i
        else
            answer += i
    }
    return answer
}
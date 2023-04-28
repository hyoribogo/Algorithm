function solution(numLog) {
    let answer = ""
    numLog.forEach((v, i, a) => {
        let num = a[i] - a[i-1]
        if(num === 1)
            answer += "w"
        else if (num === -1)
            answer += "s"
        else if (num === 10)
            answer += "d"
        else if (num === -10)
            answer += "a"
    })
    return answer;
}
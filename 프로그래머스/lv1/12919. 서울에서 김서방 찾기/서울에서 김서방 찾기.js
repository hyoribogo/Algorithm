function solution(seoul) {
    let idx
    seoul.forEach((v, i) => {
        if(v === "Kim")
            idx = i
    })
    return `김서방은 ${idx}에 있다`
}
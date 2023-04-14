function solution(s) {
    // 뒤에서 부터 검사
    s = [...s]
    for(let i = s.length - 1; i >= 0; i--) {
        const preIdx = s.slice(0, i).lastIndexOf(s[i])
        if(preIdx === -1)
            s[i] = -1
        else
            s[i] = i - preIdx
    }
    return s
}
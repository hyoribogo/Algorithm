function solution(myString, pat) {
    let cnt = 0
    for(let i = 0; i < myString.length - pat.length + 1; i++) {
        cnt += myString.indexOf(pat, i) === i ? 1 : 0
    }
    
    return cnt
}
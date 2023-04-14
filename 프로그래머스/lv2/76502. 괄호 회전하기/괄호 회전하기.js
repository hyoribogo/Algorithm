function solution(s) {
    let cnt = 0
    
    for(let i = 0; i < s.length; i++) {
        if (isRight(s)) cnt++
        s = s.slice(1,) + s[0]  
    }

    return cnt
}

function isRight(s) {
    let l = s.length
    for(let i = 0; i < l / 2; i++) {
        s = s.replaceAll(/\[\]|\(\)|\{\}/g, "") || ""
        if(!s.length) return true
    }
    return false
}
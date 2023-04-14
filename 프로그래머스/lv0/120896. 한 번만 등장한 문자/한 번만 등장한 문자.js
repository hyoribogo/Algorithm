function solution(s) {
    const r = new Set(s)
    if(s.length === r.size) return [...s].sort().join("")
    let result = ''
    for(let c of [...r]) {
        if(s.indexOf(c) === s.lastIndexOf(c))
            result += c
    }
    return [...result].sort().join("")
}
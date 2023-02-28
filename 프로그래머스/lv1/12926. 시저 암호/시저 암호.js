function solution(s, n) {
    upper = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    lower = [...'abcdefghijklmnopqrstuvwxyz']
    return [...s].map(i => {
        if (upper.indexOf(i) === -1) {
            if (lower.indexOf(i) === -1)
                return i
            return lower[(lower.indexOf(i)+n)%lower.length]
        }
        return upper[(upper.indexOf(i)+n)%upper.length]}).join("")
}
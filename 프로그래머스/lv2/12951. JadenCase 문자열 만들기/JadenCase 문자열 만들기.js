function solution(s) {
    return s.split(' ')
        .map(i => [...i]
             .map((v, i) => i ? v.toLowerCase() : v.toUpperCase())
             .join(""))
        .join(" ")
}
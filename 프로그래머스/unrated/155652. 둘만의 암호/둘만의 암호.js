function solution(s, skip, index) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    const regex = new RegExp(`[^${skip}]`, 'g');
    alpha = alpha.match(regex)
    const len = alpha.length
    return [...s].map(i => alpha[(alpha.indexOf(i) + index) % len]).join("")
}
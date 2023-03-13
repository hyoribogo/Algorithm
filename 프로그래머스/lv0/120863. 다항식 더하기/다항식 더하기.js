function solution(polynomial) {
    let x = 0
    let r = 0
    for (let i of polynomial.split(' + ')){
        if (i.at(-1) === 'x') {
            if (i.length === 1)
                x += 1
            else
                x += +i.replace('x', '')
        }
        else
            r += +i
    }
    if (!x && !r) return '0'
    if (x && r) {
        if (x === 1) x = ''
        return `${x}x + ${r}`}
    if (x === 1) x = ''
    if (!r) return `${x}x`
    return `${r}`
}
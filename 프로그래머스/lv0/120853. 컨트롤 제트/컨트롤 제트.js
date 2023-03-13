const solution = s => {
    let n
    return s.split(' ').reduce((a, c) => {
        if(c === 'Z') return a - n
        n = +c
        return a + n
    }, 0)
}
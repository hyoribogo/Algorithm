const solution = (x, n) => {
    let result = []
    for (let i = 0, j = x; i < n; i++, j += x)
        result.push(j)
    return result
}
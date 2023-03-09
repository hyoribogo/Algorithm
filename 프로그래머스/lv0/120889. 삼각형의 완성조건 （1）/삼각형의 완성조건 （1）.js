const solution = sides => {
    const max = Math.max(...sides)
    return max < sides.reduce((a, c) => a + c) - max ? 1 : 2
}
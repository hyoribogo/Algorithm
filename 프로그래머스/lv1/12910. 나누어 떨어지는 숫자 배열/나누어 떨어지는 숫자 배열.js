const solution = (array, divisor) => {
    let result = array.filter(i => i % divisor === 0).sort((a, b) => a - b)
    return result.length ? result : [-1]
} 
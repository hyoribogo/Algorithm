const solution = numbers => {
    numbers = numbers.sort((a, b) => a - b)
    const le = numbers.length
    return Math.max(numbers[0] * numbers[1], numbers[le - 2] * numbers[le - 1])
}
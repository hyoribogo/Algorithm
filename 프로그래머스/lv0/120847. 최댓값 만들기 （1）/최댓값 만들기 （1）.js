function solution(numbers) {
    const max1 = Math.max(...numbers)
    numbers.splice(numbers.indexOf(max1), 1)
    const max2 = Math.max(...numbers)
    return max1 * max2
}
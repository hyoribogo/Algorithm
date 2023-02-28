function solution(numbers) {
    let sum = 0
    numbers.reduce((a, c) => {
        sum = a + c
        return sum})
    return sum / numbers.length
}
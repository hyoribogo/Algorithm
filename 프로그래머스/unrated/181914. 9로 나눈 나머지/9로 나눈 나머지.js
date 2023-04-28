function solution(number) {
    let sum = [...number].reduce((a, c) => +a + +c)
    return sum % 9
}
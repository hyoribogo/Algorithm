function solution(numbers) {
    return 9+8+7+6+5+4+3+2+1 - numbers.reduce((acc, curr) => acc + curr)
}
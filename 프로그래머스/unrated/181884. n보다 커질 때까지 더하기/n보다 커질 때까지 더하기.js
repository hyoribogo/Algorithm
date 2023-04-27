function solution(numbers, n) {
    let sum = 0
    for(let i of numbers) {
        sum += i
        if(sum > n)
            return sum
    }
}
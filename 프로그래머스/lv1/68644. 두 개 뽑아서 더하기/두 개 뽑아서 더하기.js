function solution(numbers) {
    let answer = new Set()
    for(let idx1 = 0; idx1 < numbers.length - 1; idx1++) {
        for(let idx2 = idx1 + 1; idx2 < numbers.length; idx2++)
            answer.add(numbers[idx1] + numbers[idx2])
    }
    return [...answer].sort((a, b) => a - b)
}
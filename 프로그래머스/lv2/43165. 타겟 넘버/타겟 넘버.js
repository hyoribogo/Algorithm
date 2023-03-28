function solution(numbers, target) {
    if (numbers.reduce((acc, curr) => acc + curr) < target) return 0
    return dfs(numbers, target, 0, 0) 
}

function dfs(numbers, target, idx, sum) {
    if (numbers.length === idx) {
        return target === sum ? 1 : 0
    }
    const plus = dfs(numbers, target, idx+1, sum+numbers[idx]);
    const minus = dfs(numbers, target, idx+1, sum-numbers[idx]);
    return plus + minus;
}
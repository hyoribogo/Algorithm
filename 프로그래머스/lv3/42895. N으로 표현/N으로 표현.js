function solution(N, number) {
    const MAX_COUNT = 8
    const set = Array.from({ length: MAX_COUNT }, () => new Set())
    
    for (let i = 0; i < MAX_COUNT; i++) {
        set[i].add(Number(`${N}`.repeat(i + 1))) // 연속된 숫자 추가
        
        for (let j = 0; j < i; j++) {
            for (const arg1 of set[j]) {
                for (const arg2 of set[i - j - 1]) {
                    set[i].add(arg1 + arg2)
                    set[i].add(arg1 - arg2)
                    set[i].add(arg1 * arg2)
                    set[i].add(Math.floor(arg1 / arg2))
                }
            }
        }
        
        if (set[i].has(number)) return i + 1
    }
    return -1
}
function solution(k, tangerine) {
    if(k === tangerine.length) return new Set(tangerine).size
    let cnt = 0
    let arr = {}
    
    for(let i of tangerine)
        arr[i] = (arr[i] || 0) + 1
    
    const count = Object.values(arr).sort((a, b) => b - a)
    
    for(const i of count) {
        cnt++
        if(i < k)
            k -= i
        else break
    }
    return cnt
}

// 각각 숫자 개수 세기. Map 함수?

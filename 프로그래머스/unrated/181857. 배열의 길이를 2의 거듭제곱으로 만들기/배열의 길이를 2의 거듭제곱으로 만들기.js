function solution(arr) {
    if(arr.length === 1) return arr
    
    const pow2 = []
    for(let i = 2; i <= 1024; i *= 2) {
        pow2.push(i)
    }
    
    while(!pow2.includes(arr.length)) {
        arr.push(0)
    }
    
    return arr
}
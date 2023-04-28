function solution(a, d, included) {
    let sum = 0
    
    for(let i = 0; i < included.length; i++, a+=d)
        sum += included[i] ? a : 0
    
    return sum;
}
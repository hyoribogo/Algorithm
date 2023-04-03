function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    
    return A.map((v, i) => v * B[i]).reduce((acc, curr) => acc + curr)
}
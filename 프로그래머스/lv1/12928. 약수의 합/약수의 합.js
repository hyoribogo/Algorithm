function solution(n) {
    let sum = 0
    for (let i=1; i<=Math.sqrt(n); i++){
        if(!(n % i)){
            if(i === Math.sqrt(n)){
                sum += Math.sqrt(n)
                break
            }
            sum += (i + n/i)
        }
    }
    return sum
}
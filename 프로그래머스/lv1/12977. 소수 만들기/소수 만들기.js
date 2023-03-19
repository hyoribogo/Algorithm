function solution(nums) {
    let cnt = 0
    
    let primeArr = [false, false, true]
    .concat(new Array(2997).fill(true))
    for (let i = 4; i < 3000; i += 2) 
        primeArr[i] = false
    for (let i = 3; i < 3000; i += 2)
        primeArr[i] = isPrime(i)
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (primeArr[nums[i]+nums[j]+nums[k]])
                    cnt++
            }
        }
    }
    
    return cnt
}

function isPrime(n) {
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (!(n % i)) return false
    }
    return true
}
function solution(n) {
    let cnt = 0
    for (let i = 1; i <= n; i++){
        cnt = isPrime(i) ? cnt + 1 : cnt
    }
    return cnt
}

function isPrime(num) {
    if (num === 1)
        return false;
  
    if (num === 2)
        return true;
 
  
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0)
            return false;
    }
    return true; 
}
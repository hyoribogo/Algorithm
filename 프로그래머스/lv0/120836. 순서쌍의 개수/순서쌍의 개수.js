const solution = n => {
    cnt = 0
    for (let i = 1; i <= Math.sqrt(n); i++){
        if (n % i === 0)
            cnt += 2
    }
    return Number.isInteger(Math.sqrt(n)) ? cnt - 1 : cnt;
}
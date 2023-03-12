const solution = n => {
    if (!n) return 0
    let num = 1
    let cnt = 1
    while(num <= n) {
        num *= ++cnt
    }
    return cnt - 1
}
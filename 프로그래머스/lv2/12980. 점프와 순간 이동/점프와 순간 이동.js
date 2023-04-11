function solution(n)
{
    let cnt = 0
    while(n) {
        if(n % 2) {
            cnt++
            n--
        }
        n /= 2
    }
    return cnt
}
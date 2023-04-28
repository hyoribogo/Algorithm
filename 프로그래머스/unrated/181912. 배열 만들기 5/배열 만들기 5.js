function solution(intStrs, k, s, l) {
    return intStrs.map(i => +i.slice(s, s + l)).filter(i => +i > k)
}
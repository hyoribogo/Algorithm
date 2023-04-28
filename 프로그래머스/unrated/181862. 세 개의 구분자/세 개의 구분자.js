function solution(myStr) {
    const result = myStr.split(/[a-c]/g).filter(i => i.length)
    return result.length ? result : ["EMPTY"]
}
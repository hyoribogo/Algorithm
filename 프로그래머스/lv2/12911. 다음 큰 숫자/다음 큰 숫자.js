function solution(n) {
    const len = [...n.toString(2)].filter(i => i === '1').length
    while(n++) {
        if([...n.toString(2)].filter(i => i === '1').length === len)
            return n
    }
}
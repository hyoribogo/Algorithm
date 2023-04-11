function solution(citations) {
    citations.sort((a, b) => b - a)
    console.log(citations)
    for(let i = citations[0]; i >= 0; i--) {
        if(citations.filter(v => v >= i).length >= i)
            return i
    }
}

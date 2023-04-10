function solution(n, words) {
    let preWords = [words[0]]
    for(let i of words.slice(1,)) {
        if(preWords.at(-1).at(-1) !== i[0] || preWords.includes(i))
            return [preWords.length % n + 1, Math.ceil((preWords.length + 1) / n)]
        preWords.push(i)
    }
    return [0, 0]
}
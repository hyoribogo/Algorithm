function solution(elements) {
    let l = elements.length
    elements = elements.concat(elements.slice(0, -1))
    let resultArr = new Set()
    
    for(let len = 1; len <= l; len++) {
        for(let j = 0; j <= l; j++)
            resultArr.add(elements.slice(j, j + len).reduce((a, c) => a + c))
    }
    
    return resultArr.size
}
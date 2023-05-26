function solution(picture, k) {
    bigPicture = []
    
    for(const p of picture) {
        for(let i = 0; i < k; i++)
            bigPicture.push([...p].map(i => i.repeat(k)).join(""))
    }
    
    return bigPicture
}
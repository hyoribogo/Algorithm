function solution(sizes) {
    sizes = sizes.map(i => i[0] < i[1] ? [i[1], i[0]] : i)
    maxWidth = sizes[0][0]
    maxHeight = sizes[0][1]
    
    for(let [w, h] of sizes.slice(1,)) {
        maxWidth = maxWidth < w ? w : maxWidth
        maxHeight = maxHeight < h ? h : maxHeight
    }
    
    return maxWidth * maxHeight
}
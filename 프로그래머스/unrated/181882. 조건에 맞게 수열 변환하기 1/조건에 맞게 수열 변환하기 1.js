function solution(arr) {
    return arr.map(i => {
        if(i >= 50 && !(i%2))
            return i / 2
        else if(i < 50 && i % 2)
            return i * 2
        return i
    })
}
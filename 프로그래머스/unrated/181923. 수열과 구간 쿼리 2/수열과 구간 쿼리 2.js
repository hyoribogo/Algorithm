function solution(arr, queries) {
    return queries.map(v => {
        const [s, e, k] = v
        const newArr = arr.slice(s, e + 1).filter(i => i > k)
        return newArr.length ? Math.min(...newArr) : -1
    })
}
const solution = (arr) => {
    let r = [arr[0]]
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] !== arr[i + 1])
            r.push(arr[i + 1])
    }
    return r
}
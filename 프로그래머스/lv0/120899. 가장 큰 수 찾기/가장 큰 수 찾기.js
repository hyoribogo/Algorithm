const solution = array => {
    let max = array[0]
    let idx = 0
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]){
            max = array[i]
            idx = i
        }
    }
    return [max, idx]
}
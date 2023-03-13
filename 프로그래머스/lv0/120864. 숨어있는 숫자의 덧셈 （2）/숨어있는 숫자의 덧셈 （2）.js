const solution = my_string => {
    let arr = []
    let num = ''
    for (let i of my_string) {
        if (isNaN(i) && num.length) {
                arr.push(num)
                num = ''
        }
        else if (!isNaN(i))
            num += i
    }
    if (num.length) arr.push(num)
    arr = arr.map(i => +i)
    console.log(arr)
    return arr.length ? arr.reduce((a, c) => a + c) : 0
}
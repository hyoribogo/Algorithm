const solution = n => {
    let num = 6
    while (num % n)
        num += 6
    return num / 6
}
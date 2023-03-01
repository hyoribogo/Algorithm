const solution = (emergency) => {
    const sortedArr = [...emergency].sort((a, b) => b - a)
    return emergency.map(i => sortedArr.indexOf(i) + 1)
}
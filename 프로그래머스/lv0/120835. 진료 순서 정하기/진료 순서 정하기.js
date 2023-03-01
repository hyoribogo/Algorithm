const solution = (emergency) => {
    const keep = [...emergency]
    emergency.sort((a, b) => b - a)
    return keep.map(i => emergency.indexOf(i) + 1)
}
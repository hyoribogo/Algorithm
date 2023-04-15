function solution(name, yearning, photo) {
    return photo.map(i => {
        i = i.filter(i => name.includes(i))
        return i.length ? i.map(i => yearning[name.indexOf(i)]).reduce((a, c) => a + c) : 0
    })
}
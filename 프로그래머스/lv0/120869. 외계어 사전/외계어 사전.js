const solution = (spell, dic) => dic.filter(i => {
    for (let s of spell) {
        if (!i.includes(s)) return false
    }
    return true
}).length ? 1 : 2
const solution = (s1, s2) => s1.filter(i => {
    for (let j of s2) {
        console.log(i, j)
        if (i === j)
            return i
        }
    }).length
const solution = my_string => [...my_string].filter(i => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let idx = 0; idx < 5; idx++) {
        if (i === vowels[idx]) return false
    }
    return true
}).join("")
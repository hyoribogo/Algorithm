const solution = (s) => {
    const l = s.length
    return l % 2 ? s[Math.floor(l/2)] : s[l/2-1]+s[l/2]
}


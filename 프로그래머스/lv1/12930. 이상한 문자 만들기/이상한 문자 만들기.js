function solution(s) {
    return s.split(' ').map(i => [...i].map((v, idx) => {
        if(idx % 2)
            return v.toLowerCase()
        return v.toUpperCase()
    }).join('')).join(' ')
}
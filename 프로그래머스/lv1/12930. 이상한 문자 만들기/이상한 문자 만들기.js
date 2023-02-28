function solution(s) {
    return s.split(' ')
        .map(i => [...i]
             .map((v, idx) => 
                  idx % 2 ? v.toLowerCase() : v.toUpperCase())
             .join(''))
        .join(' ')
}
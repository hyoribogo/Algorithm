function solution(date1, date2) {
    [y1, m1, d1, y2, m2, d2] = [...date1, ...date2]
    if(y1 < y2)
        return 1
    if(y1 > y2)
        return 0
    if(m1 < m2)
        return 1
    if(m1 > m2)
        return 0
    if(d1 < d2)
        return 1
    return 0
}
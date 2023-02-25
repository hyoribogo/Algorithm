function solution(a, b) {
    const week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"] // 1.1 이 금요일이므로 week[1]이 금요일이 되게 배치
    const days = [0, 0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let sumDays = 0
    for (let i = 0; i <= a; i++) {
        sumDays += days[i]
    }
    return week[(sumDays + b) % 7]
}
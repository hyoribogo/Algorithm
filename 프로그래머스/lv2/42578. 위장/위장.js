function solution(clothes) {
    const counts = new Map();
    for (let [name, type] of clothes) {
        counts.set(type, (counts.get(type) || 0) + 1);
    }
    let answer = 1;
    for (let count of counts.values()) {
        answer *= (count + 1);
    }
    return answer - 1;
}
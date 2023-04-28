function solution(arr, intervals) {
    let [start1, end1] = intervals[0]
    let [start2, end2] = intervals[1]
    return [...arr.slice(start1, end1 + 1), ...arr.slice(start2, end2 + 1)]
}
function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b)
    rocks.push(distance)

    let left = 0
    let right = distance
    let answer = 0

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        let prevRock = 0
        let removedRocks = 0
        let minDistance = 1000000000

        for (const rock of rocks) {
            const diff = rock - prevRock
            if (diff < mid) {
                removedRocks++
            } else {
                minDistance = Math.min(minDistance, diff)
                prevRock = rock
            }
        }

        if (removedRocks > n) {
            right = mid - 1
            continue
        }
        
        answer = minDistance
        left = mid + 1
    }

    return answer
}

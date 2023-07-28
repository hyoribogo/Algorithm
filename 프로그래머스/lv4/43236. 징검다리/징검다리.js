function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b); // 바위 위치를 오름차순으로 정렬
    rocks.push(distance); // 도착지점도 마지막에 추가

    let left = 0;
    let right = distance;
    let answer = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let prevRock = 0;
        let removedRocks = 0;
        let minDistance = Number.MAX_SAFE_INTEGER;

        // 각 바위 사이의 거리를 확인하면서 최솟값을 구한다
        for (const rock of rocks) {
            const diff = rock - prevRock;
            if (diff < mid) {
                removedRocks++;
            } else {
                minDistance = Math.min(minDistance, diff);
                prevRock = rock;
            }
        }

        // n개 이상의 바위를 제거할 수 있으면 더 큰 값을 찾기 위해 left를 늘린다
        if (removedRocks <= n) {
            answer = minDistance;
            left = mid + 1;
        } else { // n개보다 많은 바위를 제거해야 한다면 더 작은 값을 찾기 위해 right를 줄인다
            right = mid - 1;
        }
    }

    return answer;
}

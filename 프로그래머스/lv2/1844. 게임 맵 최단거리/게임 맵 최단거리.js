function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const q = [[0, 0, 1]];
    visited[0][0] = true;

    while (q.length) {
        const [x, y, dist] = q.shift();

        if (x === n - 1 && y === m - 1) {
            return dist;
        }

        for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue;
            }

            if (maps[nx][ny] === 0 || visited[nx][ny]) {
                continue;
            }

            visited[nx][ny] = true;
            q.push([nx, ny, dist + 1]);
        }
    }

    return -1;
}
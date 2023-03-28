function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const q = [[0, 0, 1]];
    visited[0][0] = true;

    while (q.length) {
        const [y, x, dist] = q.shift();

        if (y === n - 1 && x === m - 1) {
            return dist;
        }

        for (const [dy, dx] of dirs) {
            const ny = y + dy;
            const nx = x + dx;

            if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                continue;
            }

            if (maps[ny][nx] === 0 || visited[ny][nx]) {
                continue;
            }

            visited[ny][nx] = true;
            q.push([ny, nx, dist + 1]);
        }
    }

    return -1;
}
function solution(board) {
    const n = board.length
    const loc = [[-1, -1], [0, -1], [1, -1], [-1, 0], [0, 0], [1, 0], [-1 ,                 1], [0, 1], [1, 1]] // 위험한 지역 위치
    
    // n * n 크기의 배열 생성
    let danger = Array.from(new Array(n), (_) => new Array(n).fill(false))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 해당 위치에 지뢰가 있는 경우
            if (board[i][j]) {
                for (let l of loc) {
                    let [x, y] = [i + l[0], j + l[1]]
                    if (x >= 0 && x < n && y >= 0 && y < n && !danger[x][y]) 
                        danger[x][y] = true                       
                }
            }
        }
    }
    let result = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!danger[i][j]) result ++
        }
    }
    return  result
}
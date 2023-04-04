function solution(board) {
  const table = board.map((row) => row.split(""));
  // case1: 순서를 잘못 놓은 경우
  let [cntO, cntX] = [0, 0];

  for (const row of table) {
    for (const cel of row) {
      if (cel === "O") cntO++;
      else if (cel === "X") cntX++;
    }
  }
  if (cntX > cntO) return 0;
  if (cntO > cntX + 1) return 0;

  const victoryCases = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    [[0, 0], [1, 1], [2, 2]],
    [[2, 0], [1, 1], [0, 2]],
  ];

  const isWinCase = (key, v) => {
    let isWin = true;
    for (const [x, y] of v) {
      if (table[x][y] !== key) {
        isWin = false;
        break;
      }
    }
    return isWin;
  };

  for (const v of victoryCases) {
    // case2: O 승리후 X를 놓은 경우
    if (isWinCase("O", v) && cntO <= cntX) return 0;
    // case3: X 승리후 O를 놓은 경우
    if (isWinCase("X", v) && cntO > cntX) return 0;
  }

  return 1;
}
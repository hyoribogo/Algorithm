function solution(keyinput, board) {
    let x = 0
    let y = 0
    const w = (board[0] - 1) / 2
    const h = (board[1] - 1) / 2
    for(let i of keyinput){
        if (i === 'left')
            x -= 1
        else if (i === 'right')
            x += 1
        else if (i === 'up')
            y += 1
        else
            y -= 1
        if(x < -w)
            x = -w
        else if (x > w)
            x = w
        if(y < -h)
            y = -h
        else if (y > h)
            y = h
    }
    return [x, y]
}
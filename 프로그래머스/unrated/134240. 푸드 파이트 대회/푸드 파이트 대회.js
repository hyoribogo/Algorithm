function solution(food) {
    food = food.slice(1,).map((v, i) => [i + 1, v]).filter(i => i[1] > 1)
    let player1 = ''
    let player2 = ''
    
    for(let i = 0, j = food.length - 1; i < food.length; i++, j--) {
        player1 += food[i][0].toString().repeat(~~(food[i][1] / 2))
        player2 += food[j][0].toString().repeat(~~(food[j][1] / 2))
    }
    
    return player1 + "0" + player2
}
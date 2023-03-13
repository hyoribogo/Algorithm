const solution = score => {
    let result = new Array(score.length).fill(0)
    score = score.map((v, i) => [(v[0] + v[1]) / 2, i]).sort((a, b) => b[0] - a[0])
    let con = 0
    result[score[0][1]] = 1
    for (let i = 1; i < score.length; i++) {
        if(score[i - 1][0] === score[i][0]) {
            con++
            result[score[i][1]] = i - con + 1
        }
        else {
            con = 0
            result[score[i][1]] = i + 1
        }
    }
    return result
}
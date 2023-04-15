function solution(answers) {
    let stu1 = [1, 2, 3, 4, 5], stu2 = [2, 1, 2, 3, 2, 4, 2, 5], stu3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let score = [[1, 0], [2, 0], [3, 0]]
    
    for(let i = 0; i < answers.length; i++) {
        score[0][1] += answers[i] === stu1[i % stu1.length] ? 1 : 0
        score[1][1] += answers[i] === stu2[i % stu2.length] ? 1 : 0
        score[2][1] += answers[i] === stu3[i % stu3.length] ? 1 : 0
    }
    
    return score.sort((a, b) => b[1] - a[1]).filter(i => score[0][1] === i[1]).map(i => i[0])
}
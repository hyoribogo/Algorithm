function solution(quiz) {
    return quiz.map(i => {
        const evalArr = i.split("=").map(i => i.trim())
        const evalTest = evalArr[0].split(" ")
        let result = evalTest[1] === "-" ? +evalTest[0] - +evalTest[2] : +evalTest[0] + +evalTest[2]
        
        return result === +evalArr[1] ? "O" : "X"
    })
}
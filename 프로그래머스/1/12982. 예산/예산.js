function solution(d, budget) {
    d.sort((num1, num2) => num1 - num2)
    const result = d.findIndex((money) => {
        budget -= money
        return budget < 0
    })
    return result === -1 ? d.length : result
}

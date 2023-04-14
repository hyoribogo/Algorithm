function solution(order) {
    return [...order.toString()].filter(i => i === "3" || i === "6" || i === "9").length
}
function solution(order) {
    let sum = 0
    
    const orderStr = order.join("")
    const ameriCnt = orderStr.match(/americano|anything/g) || []
    const calaCnt = orderStr.match(/cafelatte/g) || []
    
    sum += ameriCnt.length * 4500 + calaCnt.length * 5000
    return sum
}
function solution(price, money, count) {
    let result = money - (price + price * count) * count / 2
    return result < 0 ? result * -1 : 0
}


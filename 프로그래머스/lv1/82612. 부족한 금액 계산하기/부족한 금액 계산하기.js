function solution(price, money, count) {
    for(let i = 1, j = price; i <= count; i++, j += price) {
        console.log(money, i, j)
        money -= j
        
    }
    
    return money < 0 ? money * -1 : 0
}
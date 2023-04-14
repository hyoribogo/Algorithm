function solution(order) {
    const clap = order.toString().match(/[369]/g)
    return clap ? clap.length : 0
}
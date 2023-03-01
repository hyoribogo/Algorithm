function solution(age) {
    const alpha = [..."abcdefghijklmnopqrstuvwxyz"]
    return [...`${age}`].map((v, i) => alpha[v]).join("")
}
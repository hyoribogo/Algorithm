function solution(age) {
    const alpha = [..."abcdefghij"]
    return [...`${age}`].map((v, i) => alpha[v]).join("")
}
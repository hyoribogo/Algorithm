function solution(age) {
    const alpha = "abcdefghij"
    return [...age.toString()].map((v, i) => alpha[v]).join("")
}
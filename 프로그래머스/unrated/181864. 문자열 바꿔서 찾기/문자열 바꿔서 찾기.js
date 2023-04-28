function solution(myString, pat) {
    let result = ""
    for(let c of myString)
        result += c === "A" ? "B" : "A"
    return result.includes(pat) ? 1 : 0
}
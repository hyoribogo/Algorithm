function solution(s) {
    if (s[-2] === "e")
        return false
    return (s.length === 4 || s.length === 6) && !isNaN(s) && !s.includes("e")
}
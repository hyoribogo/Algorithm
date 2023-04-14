function solution(my_string, num1, num2) {
    let copy = [...my_string]
    const c = copy[num1]
    copy[num1] = copy[num2]
    copy[num2] = c
    return copy.join("")
}
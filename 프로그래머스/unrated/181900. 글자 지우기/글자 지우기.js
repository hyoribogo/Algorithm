function solution(my_string, indices){
    const arr = [...my_string]
    indices.forEach(i => arr[i] = "")
    return arr.join("")
}
function solution(my_str, n) {
    let answer = [];
    let l = my_str.length
    for (let i = 0; i < l; i += n) {
        answer.push(my_str.slice(i, i + n))
    }
    return answer;
}
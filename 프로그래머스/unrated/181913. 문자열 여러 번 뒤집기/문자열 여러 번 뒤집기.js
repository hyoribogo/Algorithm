function solution(my_string, queries) {
    var answer = '';
    for(let [start, end] of queries)
        my_string = reverseIdx(my_string, start, end)
    return my_string
}

function reverseIdx(s, start, end) {
    return s.slice(0, start)+[...s.slice(start, end+1)].reverse().join("")+s.slice(end+1)
}
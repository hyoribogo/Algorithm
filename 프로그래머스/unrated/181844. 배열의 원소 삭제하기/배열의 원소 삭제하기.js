function solution(arr, delete_list) {
    for(let i of delete_list) {
        arr = arr.includes(i) ? del(arr, i) : arr
    }
    return arr
}

function del(arr, value) {
    let idx = arr.indexOf(value)
    return [...arr.slice(0, idx), ...arr.slice(idx + 1)]
}
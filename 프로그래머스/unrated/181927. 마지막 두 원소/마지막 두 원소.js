function solution(num_list) {
    let last = num_list.at(-1)
    let pre = num_list.at(-2)
    return last > pre ? num_list.concat(last - pre) : num_list.concat(last * 2)
}
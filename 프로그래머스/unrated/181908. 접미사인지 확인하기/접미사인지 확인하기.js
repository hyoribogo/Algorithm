function solution(my_string, is_suffix) {
    let idx = my_string.lastIndexOf(is_suffix)
    return idx === -1 ? 0 : idx === my_string.length - is_suffix.length ? 1 : 0
}
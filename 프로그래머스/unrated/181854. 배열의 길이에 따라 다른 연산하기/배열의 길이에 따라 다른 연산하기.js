function solution(arr, n) {
    let num = arr.length % 2 ? 0 : 1
    for(let i = num; i < arr.length; i +=2) {
        arr[i] += n
    }
    return arr
}
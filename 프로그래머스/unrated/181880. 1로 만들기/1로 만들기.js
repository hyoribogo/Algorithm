const solution = num_list => {
    let cnt = 0
    num_list.forEach(v => {
        while(v > 1){
            v = (v - v % 2) / 2
            cnt++
        }
    })
    return cnt
}
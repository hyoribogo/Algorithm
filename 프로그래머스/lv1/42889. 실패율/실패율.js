function solution(N, stages) {
    let p = stages.length
    let arr = []
    
    for(let i = 1; i <= N; i++){
        arr[i] = [i, 0]
    }
    
    for(let i of stages){
        if(i <= N)
            arr[i][1]++
    }
    return arr.splice(1,).map(i => {
        const fail = [i[0], i[1]/p]
        p -= i[1]
        return fail
    }).sort((a, b) => b[1] - a[1]).map(i => i[0])
}


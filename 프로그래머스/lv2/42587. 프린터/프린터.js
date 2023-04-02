function solution(priorities, location) {
    let arr = priorities.map((v, i) => [v, i])
    let cnt = 0;
    
    while(true) {
        const front = arr.shift()
        for (let i of arr) {
            if (front[0] < i[0]){
                arr.push(front)
                break
            }     
        }
        if (front != arr.at(-1)) {
            cnt++
            if(front[1] === location)
                return cnt
        }
    }
}
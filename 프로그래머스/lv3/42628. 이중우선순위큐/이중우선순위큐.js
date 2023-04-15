function solution(operations) {
    let queue = []
    
    for(let o of operations) {
        if(o[0] === "I")
            queue.push(+o.slice(2,))
        else if(queue.length) {
            if(o === "D -1"){
                const min = Math.min(...queue)
                const minIdx = queue.indexOf(min)
                queue = queue.slice(0, minIdx).concat(queue.slice(minIdx + 1))
            }
            else { 
                const max = Math.max(...queue)
                const maxIdx = queue.indexOf(max)
                queue = queue.slice(0, maxIdx).concat(queue.slice(maxIdx + 1))
            }
        }
    }
    
    return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0, 0]
}
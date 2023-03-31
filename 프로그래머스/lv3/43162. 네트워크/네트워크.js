function solution(n, computers) {
    let cnt = 0;
    let visited = new Array(n).fill(false);
    
    for(let i = 0; i < n; i++) {
        if (!visited[i]) {
            let q = [[computers[i], i]];
            while(q.length) {
                let [arr, idx] = q.shift()
                visited[idx] = true;
                for (let j = 0; j < n; j++) {
                    if(arr[j] && !visited[j] && j !== idx) {
                        q.push([computers[j], j])
                    }
                }
            }
        cnt++;
        }
    }
    return cnt;
}
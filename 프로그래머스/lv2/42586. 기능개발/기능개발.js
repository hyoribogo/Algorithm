function solution(progresses, speeds) {
    let result = [];
    let cnt = 0;
    
    let q = []; // 작업 소요일 큐 리스트
    for(let i = 0; i < progresses.length; i++) {
        q.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    while(q.length) {
        cnt = 0;
        q = q.map(i => i - q[0]);
        for(let i = 0; i < q.length; i++) {
            if(q[i] <= 0)
                cnt++
            else
                break
        }
        for(let i = 0; i < cnt; i++)
            q.shift();
        result.push(cnt);
    }
    return result;
}

// 둘다 큐에 넣어놔. [93, 1], [30, 30], [55, 5] 이렇게
// ~~((100-93) / 1)  이런식으로 . ㅎ_ㅎ 그리고 큐에서 뺀 개수를 cnt해서 result에 넣어!
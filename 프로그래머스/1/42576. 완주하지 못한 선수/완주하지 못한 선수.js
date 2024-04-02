function solution(participant, completion) {
    participant.sort()
    completion.sort()
    
    for (let i = 0; i < completion.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i]
        }
    }
    
    return participant.at(-1)
}

// participant 100,000까지 o(n^2) 까진 가능
// 한 명 빼고다 완주
// participant과 completion를 비교해서
// 없는 애를 찾아내면 돼 ..?!
// 동명이인이 있을 수도 있다?

// a, b, c
// a, b, c
// a b b c
// a b c
// a b c c
// a b c
// a a b c
// a b c
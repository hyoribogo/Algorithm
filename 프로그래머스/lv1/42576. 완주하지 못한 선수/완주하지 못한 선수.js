function solution(participant, completion) {
    const a = participant.sort()
    const b = completion.sort()
    
    for(let i = 0; i < b.length; i++) {
        if(a[i] !== b[i])
            return a[i]
    }
    return a.at(-1)
}
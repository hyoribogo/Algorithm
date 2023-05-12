function solution(record) {
    const nicknameList = new Map()
    const result = []
    
    for(const m of record) {
        const [c, id, nickname] = m.split(" ")
        if(c === "Enter" || c === "Change")
            nicknameList.set(id, nickname)
    }
    
    for(const m of record) {
        const [c, id] = m.split(" ")
        
        if(c === "Enter")
            result.push(nicknameList.get(id)+"님이 들어왔습니다.")
        else if(c === "Leave")
            result.push(nicknameList.get(id)+"님이 나갔습니다.")
    }
    
    return result
}
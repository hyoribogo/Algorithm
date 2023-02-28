function solution(s){
    if(s[0] === ")")
        return false
    let left = 0
    for (let i of s){
        if(i === "(")
            left ++
        else{
            left --
            if (left < 0) return false
        }
    }
    return left ? false : true
}
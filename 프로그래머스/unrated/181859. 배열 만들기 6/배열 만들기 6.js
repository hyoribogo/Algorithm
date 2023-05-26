function solution(arr) {
    const stk = []
    
    for(let i = 0; i < arr.length; i++) {
        if(!stk.length || stk.at(-1) !== arr[i])
            stk.push(arr[i])
        else
            stk.pop()
    }
    
    return stk.length ? stk : [-1]
}
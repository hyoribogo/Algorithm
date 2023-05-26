function solution(arr) {
    const stk = []
    
    for(let i = 0; i < arr.length; i++) {
        while(stk.at(-1) >= arr[i])
            stk.pop()
        
        if(!stk.length || stk.at(-1) < arr[i])
            stk.push(arr[i])
    }
    
    return stk
}
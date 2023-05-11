function solution(arr) {
    let answer = 0
    let changeNum = 0
    
    while(true) {
        arr = arr.map(x => {
            if(x >= 50 && !(x % 2)){
                changeNum++
                return x / 2
            }
            else if(x < 50 && x % 2){
                changeNum++
                return x * 2 + 1
            } 
            return x
        })
        
        if(!changeNum) break
        
        answer++
        changeNum = 0
    }
    
    return answer
}
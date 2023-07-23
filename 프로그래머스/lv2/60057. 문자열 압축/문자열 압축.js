function solution(s) {
    let result = s.length
    
    for (let range = 1; range <= Math.floor(s.length / 2); range++) {
        let cntLen = s.length
        let cntNum = 0
        let lastStr = ''
        
        for (let idx = 0; idx + range <= s.length; idx += range) {
            const str = s.substring(idx, idx + range)
            
            cntNum++
            if (lastStr !== str) {
                if (cntNum > 1) {
                    cntLen -= cntNum * range - (cntNum.toString().length + range)
                }
                
                lastStr = str
                cntNum = 0
            }
        }
        if (cntNum > 0) {
            cntNum++
            cntLen -= cntNum * range - (cntNum.toString().length + range)
        }
        
        result = Math.min(result, cntLen)
    }
    
    return result
}

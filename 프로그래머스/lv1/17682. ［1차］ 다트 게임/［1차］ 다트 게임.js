function solution(dartResult) {
    let firstSum = []
    let numCnt = 0;
    let result = 0;
    for(let i = 0; i < dartResult.length; i++) {
        if(!isNaN(dartResult[i])) {
            if(!isNaN(dartResult[i-1]))
                firstSum[firstSum.length - 1] = 10
            else{
                firstSum.push(+dartResult[i])
                numCnt++
            }
                
        }
        else if(dartResult[i] === "*") {
            firstSum[firstSum.length - 1] *= 2
            firstSum[firstSum.length - 2] *= 2
            console.log(firstSum)
        }
        else if(dartResult[i] === "#")
            firstSum[firstSum.length - 1] *= -1
        else if(dartResult[i] === "D")
            firstSum[firstSum.length - 1] = firstSum.at(-1) ** 2
        else if(dartResult[i] === "T")
            firstSum[firstSum.length - 1] = firstSum.at(-1) ** 3
    }
    for(let i = 0; i < numCnt; i++)
        result+=firstSum[i]
    return result
}
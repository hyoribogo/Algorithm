function solution(numbers) {
    return numbers.map(num => {
        const numStr = ["0", ...num.toString(2)]
        for(let i = numStr.length - 1; i >= 0; i--) {
            if(numStr[i] === "0") {
                numStr[i] = "1"
                if(i !== numStr.length - 1)
                    numStr[i + 1] = "0"
                break
            }
        }
        return parseInt(numStr.join(""), 2)
    })
}
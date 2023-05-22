function solution(word) {
    const alpha = ['A', 'E', 'I', 'O', 'U']
    const dict = new Set()
    for(let i = 0; i < 5; i++) {
        dict.add(alpha[i])
    }
    
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++)
            dict.add(alpha[i]+alpha[j])
    }
    
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++) {
            for(let k = 0; k < 5; k++)
                dict.add(alpha[i]+alpha[j]+alpha[k])
        }
    }
    
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++) {
            for(let k = 0; k < 5; k++) {
                for(let d = 0; d < 5; d++)
                    dict.add(alpha[i]+alpha[j]+alpha[k]+alpha[d])
            }
        }
    }
    
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++) {
            for(let k = 0; k < 5; k++) {
                for(let d = 0; d < 5; d++) {
                    for(let f = 0; f < 5; f++)
                        dict.add(alpha[i]+alpha[j]+alpha[k]+alpha[d]+alpha[f])
                }
            }
        }
    }
    return [...dict].sort().indexOf(word) + 1
}

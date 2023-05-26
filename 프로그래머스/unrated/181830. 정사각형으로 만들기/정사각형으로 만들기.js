function solution(arr) {
    if(arr.length === arr[0].length) return arr
    
    while(arr.length < arr[0].length) {        
        arr.push(new Array(arr[0].length).fill(0))
    }
    
    while(arr[0].length < arr.length) {        
        arr = arr.map(i => {
            i.push(0)
            return i
        })
    }
    
    return arr
}
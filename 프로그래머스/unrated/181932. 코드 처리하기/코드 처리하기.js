function solution(code) {
    let mode = false
    let ret = "";
    
    [...code].forEach((v, i) => {
        if(v === "1")
            mode = !mode
        else
            ret += (mode && i % 2) || (!mode && !(i % 2)) ? v : ""  
    })
    
    return ret.length ? ret : "EMPTY"
}
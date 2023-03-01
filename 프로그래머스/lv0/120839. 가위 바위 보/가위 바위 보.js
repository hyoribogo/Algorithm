const solution = (rsp) => [...rsp].map(i => { 
    if (Number(i)) 
        return i === "2" ? 0 : 2
    return 5
}).join("")
const solution = (n) => {
    const wm = ["수", "박"]
    let result = ""
    for (let i=0; i<n; i++) {
        result+=wm[i%2]
    }
    return result
}
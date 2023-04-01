const solution = (n, lost, reserve) => {
    let state = new Array(n).fill(1);
    for (let i of lost)
        state[i - 1]--
    for (let i of reserve)
        state[i - 1]++
    for (let i = 0; i < n; i++) {
        if (state[i] === 2) {
            if (i > 0 && !state[i - 1]){
                state[i - 1]++;
                state[i]--;
            }
            else if (i < n && !state[i + 1]){
                state[i + 1]++;
                state[i]--;
            }
        }
    }
    return state.filter(i => i > 0).length;
}
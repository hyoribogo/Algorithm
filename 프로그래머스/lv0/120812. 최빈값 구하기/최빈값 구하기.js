function solution(array) {
    let result = new Map();
    for (let n of array) 
        result.set(n, (result.get(n) || 0)+1);
    result = [...result].sort((a,b)=>b[1]-a[1]);
    return result.length === 1 || result[0][1] > result[1][1] ? result[0][0] : -1;
}
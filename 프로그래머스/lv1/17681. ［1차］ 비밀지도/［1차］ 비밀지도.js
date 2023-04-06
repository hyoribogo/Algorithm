function solution(n, arr1, arr2) {
    let result = Array.from({ length:n }, () => new Array(n).fill().map(() => 0));
    arr1 = arr1.map(i => {
        i = i.toString(2);
        return i.length < n ? "0".repeat(n - i.length)+i : i
    });
    arr2 = arr2.map(i => {
        i = i.toString(2);
        return i.length < n ? "0".repeat(n - i.length)+i : i
    });
    
    for(let i = 0; i < n; i++) { 
        for (let j = 0; j < n; j++){
            result[i][j] = +arr1[i][j] || +arr2[i][j] ? "#" : " ";
        }
    }
    return result.map(i => i.join(""))
}
const solution = (array, n) => {
    let count = 0
    array.map(i=> {
        if(i===n)
            count+=1;
    })
    return count;
}
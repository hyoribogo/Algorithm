function solution(str_list) {
    const [lIdx, rIdx] = [str_list.indexOf("l"), str_list.indexOf("r")]
    console.log(lIdx, rIdx)

    return lIdx === -1 && rIdx === -1 ? [] :
            (lIdx !== -1 && lIdx < rIdx) || rIdx === -1 ? str_list.slice(0, lIdx) :
            str_list.slice(rIdx + 1)
}
function solution(s) {
    const tuple = [...new Set(s.slice(2, s.length-2)
                          .split("},{")
                          .map(i => i.split(","))
                          .sort((a, b) => a.length - b.length)
                          .flat())]
                          .map(i => +i)
    console.log(tuple)
    return tuple
    // // console.log(s.match(/[0-9,]/g).join(""))
    // let nums = [...new Set(s.match(/[0-9,]/g).join("").split(","))].map(i => +i)
    // return nums
}
function solution(files) {
    // files = files.map(file => {
    //     const numIdx = file.search(/[0-9]/g)
    //     let head = file.slice(0, numIdx)
    //     let num = ""
    //     let tail = ""
    //     for(let i = numIdx; i < file.length; i++) {
    //         if(isNaN(file[i])) {
    //             tail = file.slice(i)
    //             break
    //         }
    //         num += file[i]
    //     }
    //     return [head, num, tail]
    // })
    
    files.sort((file1, file2) => {
        const [numIdx1, numIdx2] = [file1.search(/[0-9]/g), file2.search(/[0-9]/g)]
        const [head1, head2] = [file1.slice(0, numIdx1).toLowerCase(), file2.slice(0, numIdx2).toLowerCase()]
        let [num1, num2] = ["", ""]
        for(let i = numIdx1; i < file1.length; i++) {
            if(isNaN(file1[i])) break
            num1 += file1[i]
        }
        for(let i = numIdx2; i < file2.length; i++) {
            if(isNaN(file2[i])) break
            num2 += file2[i]
        }
        return head1 === head2 ? +num1 - +num2 : head1 < head2 ? -1 : 1
    })
    
    return files
}


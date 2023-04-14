function solution(my_string) {
    let result = 0
    my_string = my_string.split(" ")
    if(!isNaN(my_string[0])) result += +my_string[0]
    for(let i = 1; i < my_string.length - 1; i++) {
        if(isNaN(my_string[i])) {
            if(my_string[i] === "+")
                result += +my_string[i + 1]
            else
                result -= +my_string[i + 1]
        }
    }
    return result
}


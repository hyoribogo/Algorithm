function solution(routes) {
    routes.sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1])
    
    let end = routes[0][1]
    let result = 1
    
    for(let i = 1; i < routes.length; i++) {
        if(end < routes[i][0]) {
            end = routes[i][1]
            result++
        }
    }
    
    return result
}
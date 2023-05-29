function solution(routes) {
    routes.sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1])
    console.log(routes)
    
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

// 모든 차가 1번 이상 단속용 카메라 만난다.
// routes 각각의 원소는 차량의 이동 경로 진입 지점, 나간 지점
// 차량은 10,000대 이하
// 진입 지점, 진출 지점 범위는 -3만~ 3만
// 최소 몇 대의 카메라를 설치해야 하는가?
// 첫번째 원소부터 비교하자. 
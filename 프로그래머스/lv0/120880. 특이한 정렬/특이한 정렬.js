const solution = (numlist, n) => {
    // n과의 차이로 배열을 바꾸자!
    // 그런 후, 각각의 원소의 절댓값 크기 기준으로 오름차순 정렬 해주기
    // 여기서 거리가 같다면 더 큰 수가 앞에 와야하므로, sort 함수에서 return -1 해주기
    // 다시 n을 더해주면 완성
    return numlist.map(i => i - n).sort((a, b) => {return Math.abs(a) === Math.abs(b) ? b - a : Math.abs(a) - Math.abs(b)}).map(i => i + n)
}
// limit / 2 에서 가까운 순으로 정렬한다. 그러기 위해 절댓값 함수를 통해 정렬시켜준다.

function solution(people, limit) {
    let result = 0;
    people.sort((a, b) => a - b);
    while(people.length) {
        if(people.length >= 2 && people[0] + people.at(-1) <= limit) {
            result++;
            people.shift();
            people.pop();
        }
        else {
            result++;
            people.pop();
        }
    }
    return result;
}
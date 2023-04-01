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
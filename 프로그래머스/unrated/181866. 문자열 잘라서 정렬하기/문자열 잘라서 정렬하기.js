function solution(myString) {
    return myString.split("x").filter(i => i.length).sort()
}
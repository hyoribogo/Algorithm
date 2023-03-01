function solution(babbling) {
    return babbling.join()
        .split("aya").join(" ")
        .split("ye").join(" ")
        .split("woo").join(" ")
        .split("ma").join("")
        .split(",").map(i => i.trim())
        .filter(i => i === "").length
}
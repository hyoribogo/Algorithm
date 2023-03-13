const solution = dots => {
    dots = dots.sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1])
    if (dots[0][0] < 0) {
        dots[1][0] -= dots[0][0]
        dots[0][0] -= dots[0][0]
    }
    if (dots[0][1] < 0) {
        dots[2][1] -= dots[0][1]
        dots[0][1] -= dots[0][1]
    }
    return (dots[1][0] - dots[0][0]) * (dots[2][1] - dots[0][1])
}
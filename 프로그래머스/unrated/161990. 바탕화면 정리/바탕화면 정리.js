function solution(wallpaper) {
    let [x1, x2, y1 ,y2] = [-1, -1, -1, -1]
    for(let i = 0; i < wallpaper.length; i++) {
        let Xleft = wallpaper[i].indexOf("#")
        let Xright = wallpaper[i].lastIndexOf("#")
        x1 = (x1 < 0 || Xleft < x1) && Xleft !== -1  ? Xleft : x1
        x2 = x2 < 0 || Xright + 1 > x2 ? Xright + 1 : x2
        console.log(x2)
        y1 = y1 < 0 && Xright !== -1 ? i : y1
        y2 = Xleft !== -1 && i + 1 > y2 ? i + 1 : y2
    }
    return [y1, x1, y2, x2]
}
function solution(genres, plays) {
    const playMap = new Map()
    const songs = []
    for(let i = 0; i < genres.length; i++) {
        playMap.set(genres[i], (playMap.get(genres[i]) || 0) + plays[i])
        songs.push([genres[i], plays[i], i])
    }
    
    songs.sort((a, b) => {
        if(playMap.get(b[0]) !== playMap.get(a[0]))
            return playMap.get(b[0]) - playMap.get(a[0])
        else if(b[1] !== a[1])
            return b[1] - a[1]
        else
            a[2] - b[2]
    })
    
    let cnt = 0
    let curr = songs[0][0]
    
    return songs.filter(song => {
        if(curr !== song[0]) {
            curr = song[0]
            cnt = 0
        }
        return cnt++ < 2
    }).map(i => i[2])
}
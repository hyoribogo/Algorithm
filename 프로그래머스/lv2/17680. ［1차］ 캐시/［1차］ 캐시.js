function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5
    let data = []
    let time = 0
    while(cities.length) {
        const city = cities.splice(0, 1).join("").toLowerCase()
        
        if(data.includes(city)) {
            time++
            data.splice(data.indexOf(city), 1)
        }
        else {
            time += 5
            if(data.length === cacheSize)
                data.splice(0, 1)
        }
        data.push(city)
    }
    
    return time
}


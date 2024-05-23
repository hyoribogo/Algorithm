function solution(cacheSize, cities) {
    const MISS = 5, HIT = 1
    
    if (cacheSize === 0) return cities.length * MISS
    
    let time = 0, cache = []
    
    cities.forEach((city) => {
        city = city.toLowerCase()
        const index = cache.indexOf(city)
        
        if (index >= 0) {
            time += HIT
            cache = [...cache.slice(0, index), ...cache.slice(index + 1), city]
            
            return
        }
        
        cache.push(city)
        time += MISS
        
        if (cache.length === cacheSize + 1) {
            cache.shift()
        }
    })
    
    return time
}

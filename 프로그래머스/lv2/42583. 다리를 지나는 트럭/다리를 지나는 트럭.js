function solution(bridge_length, weight, truck_weights) {
    const trucks_on_bridge = new Array(bridge_length).fill(null)
    let current_trucks_weight = truck_weights[0]
    trucks_on_bridge[0] = truck_weights.shift()
    let result = 1
    
    while(current_trucks_weight) {
        const end = trucks_on_bridge.pop()
        
        if(end)
            current_trucks_weight -= end
        
        if(current_trucks_weight + truck_weights[0] <= weight) {
            const start = truck_weights.shift()
            trucks_on_bridge.unshift(start)
            current_trucks_weight += start
        }
        else
            trucks_on_bridge.unshift(null)
        
        result++
    }
    
    return result
}
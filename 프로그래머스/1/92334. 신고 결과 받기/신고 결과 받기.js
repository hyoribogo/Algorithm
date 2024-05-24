function solution(id_list, report, k) {
    const result = []
    
    const userReportId = new Map()
    const userReportCount = new Map()
    
    report.forEach((r) => {
        const [id, target] = r.split(" ")
        
        const reportSet = userReportId.get(id)
        
        if (!reportSet) {
            userReportId.set(id, new Set([target]))
            userReportCount.set(target, (userReportCount.get(target) || 0) + 1)
            
            return
        }
        
        if (reportSet.has(target)) {
            return
        }
        
        userReportId.get(id).add(target)
        userReportCount.set(target, (userReportCount.get(target) || 0) + 1)
    })
    
    id_list.forEach((id) => {
        const reportSet = userReportId.get(id)
        let sum = 0
        
        if (!reportSet) {
            result.push(sum)
            return
        }
        
        const reportList = [...reportSet]
        
        reportList.forEach((target) => {
            sum = userReportCount.get(target) >= k ? sum + 1 : sum 
        })
        
        result.push(sum)
    })
    
    return result
}
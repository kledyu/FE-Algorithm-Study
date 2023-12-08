function solution(id_list, report, k) {
    let answer = Array.from({ length: id_list.length }, () => 0);
    const reports = Array.from(new Set(report));
    const map = new Map();
    let pausedList = [];
    
    reports.forEach(report => {
        const [reportUser, reportedUser] = report.split(' ');
        map.set(reportedUser, map.get(reportedUser) ? map.get(reportedUser) + 1 : 1);
    })
    
    const pausedUser = map.forEach((value, key) => {
        if (value >= k) pausedList.push(key)
    })
    
    reports.forEach(report => {
        const [reportUser, reportedUser] = report.split(' ');
        if (pausedList.includes(reportedUser)) answer[id_list.indexOf(reportUser)] += 1
     })
    
    return answer;
}

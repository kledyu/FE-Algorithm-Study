function solution(s) {
    let answer = [];
    const set = new Set();
    const arr = s.slice(2, -2).split('},{').sort((a, b) => a.length - b.length);
    
    // arr = ['2', '2,1', '2,1,3' ...]
    arr.forEach(value => {
        // value.split(',') = ['2'] or ['2, 1'] or ['2, 1, 3'] ...
        value.split(',').forEach(str => {
            const num = Number(str);
            
            if (!set.has(num)) {
                answer.push(num)
                set.add(num)
            }
        })
    })
    
    return answer;
}

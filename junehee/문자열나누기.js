function solution(s) {
    let answer = [];
    let x = "";
    let same = 0;
    let diff = 0;
    
    for (let i of s) {
        if (!x) x = i;
        
        if (x === i) same++;
        else diff++;

        if (same === diff) {
            answer.push(s.split(i)[0])
            x = "";
            same = 0;
            diff = 0;
        }
    }
    
    if (x.length) answer.push(s.split(s[x])[0])
    return answer.length;
}

function solution(n,a,b) {
    let answer = 0;
    
    for (let i = 1; i <= n; i += 1) {
        if (a === b) break;
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer += 1;
    }

    return answer;
}

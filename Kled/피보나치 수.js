function solution(n) {
    let answer = 0;
    let n2 = 0;
    let n1 = 1;
    
    for (let i = 0; i < n - 1; i += 1) {
        answer = n2 + n1;
        n2 = n1 % 1234567;
        n1 = answer % 1234567
    }
    return answer % 1234567;
}

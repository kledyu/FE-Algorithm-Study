function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= Math.floor(n / 2); i += 1) {
        let accumulate = 0;
        let target = i;
        
        while (accumulate <= n) {
            accumulate += target;
            target += 1
            
            if (accumulate === n) answer += 1
        }
    }
    
    return answer + 1;
}

function solution(left, right) {
    let answer = 0;
    
    // 1. left부터, righ까지 
    for (left; left <= right; left++) {
        // 2. 약수를 담는 배열 선언
        let arr = [];
        // 3. 약수 찾아서 더하기
        for (let i = 1; i <= left; i++) {
            if (left % i === 0) {
                arr.push(i)
            }
        }
        
        // 4. length를 통한 판별
        if (arr.length % 2 === 0) answer += left
        else answer -= left
    }
    
    return answer;
}

function solution(d, budget) {
    // 총 금액
    let sum = 0;
    
    // 1. 오름차순 정렬
    d.sort((a, b) => a - b)
    
    
    for (let i = 0; i < d.length; i++) {
        // 2. 총 금액 변수 sum에 하나씩 가산
        sum += d[i]    
        
        // 3. 예산이 초과되면, i(개수) 반환
        if (sum > budget) {
            return i
        }
    }
    // 4. 예산이 초과되지 않았다면, 모든 부서가 구매할 수 있으므로, 배열의 길이 반환.
    return d.length
}

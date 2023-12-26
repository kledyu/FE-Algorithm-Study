function solution(want, number, discount) {
    let answer = 0;
    let hash = {};

    // 해시 채우기 (apple: 3, ... )
    want.forEach((value, index) => hash[value] = number[index])
    
    for (let i = 0; i < discount.length - 1; i += 1) {
        // 구매해야할 항목의 총 개수
        let total = number.reduce((acc, cur) => acc + cur, 0);
        // 해시 깊은 복사
        let duplicatedHash = { ...hash };
        // 총 개수 복사
        let duplicatedTotal = total;
        
        for (let j = i; j < i + duplicatedTotal; j += 1) {
            const target = discount[j];

            if (duplicatedHash[target]) {
                duplicatedHash[target] -= 1;
                total -= 1;
            } else break;
            
            if (!total) answer += 1;
        }
    }
  
    return answer;
}

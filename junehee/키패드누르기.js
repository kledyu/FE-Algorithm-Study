function solution(numbers, hand) {
    let answer = '';
    
    // 현재 위치
    let left = 10;
    let right = 12;
    
    for (let num of numbers) {
        if ([1, 4, 7].includes(num)) {
            answer += "L"
            left = num
        } else if ([3, 6, 9].includes(num)) {
            answer += "R"
            right = num
        } else if ([2, 4, 6, 8].includes(num)) {
            if (num === 0) num = 11
            
            let leftToNum = Math.abs(num - left)
            let rightToNum = Math.abs(num - right)
            
            if (leftToNum === rightToNum) {
                if (hand === "left") {
                    answer += "L"
                    left = num
                } else {
                    answer += "R"
                    right = num
                }
            } else if (leftToNum > rightToNum) {
                answer += "L"
                left = num
            } else {
                answer += "R"
                right = num
            }
        }
    }
        
    return answer;
}

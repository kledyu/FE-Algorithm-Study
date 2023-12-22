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
        } else {
            if (num === 0) num = 11
            
            // 여기를 모르겠습니다...!!!!!!!!!!!
            
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

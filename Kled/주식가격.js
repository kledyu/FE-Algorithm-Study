function solution(prices) {
    let answer = [];
    
    prices.forEach((price, index) => {
        let seconds = 0;
        
        for (let i = index + 1; i < prices.length; i += 1) {
            // +1초 흐름
            seconds += 1;
            
            // 현재 가격이 이후에 떨어진다면 break
            if (price > prices[i]) break;
        }
        
        // 지금까지 존버한 시간을 push
        answer.push(seconds)
    })
    
    return answer;
}

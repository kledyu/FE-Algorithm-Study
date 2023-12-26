function solution(n, left, right) {
    if (n === 1) return [1];
    
    let answer = [];
    
    for (let i = Math.ceil(left / n); i <= Math.ceil(right / n); i += 1) {
        // 가로 길이
        let dx = n;
        let row = i;
        let nextValue = row + 1;
        
        while (dx > 0 && i) {
            // row가 2라면 [2, 2], row가 3이라면 [3, 3, 3]을 push하는 while
            while (row > 0) {
                answer.push(i);
                row -= 1
                dx -= 1;
            }
            // 가로 길이(하나의 행)가 모두 채워졌을 경우 break
            if (!dx) break;

            // row = 5일 때, [3, 3, 3]을 채웠다면 나머지 [4, 5]를 채우는 과정
            answer.push(nextValue);
            nextValue += 1;
            dx -= 1;
        }
    }
  
    return answer.splice(left % n, right - left + 1);
}

function solution(s) {
    let answer = 0;
    const double = s + s;
    
    const LEFT = ['(', '{', '['];
    const RIGHT = [')', '}', ']'];
    
    for (let i = 0; i < s.length; i += 1) {
        const stack = [];
        
        for (let j = i; j < i + s.length; j += 1) {
            const target = double[j];

            // 스택이 비어있는데 우측 괄호라면 for문 종료
            if (RIGHT.includes(target) && !stack.length) {
                answer -= 1;
                
                break;
            }

            // 왼쪽 괄호라면 스택에 push
            if (LEFT.includes(target)) stack.push(target);

            // 스택의 마지막 요소가 타겟과 짝꿍 괄호라면 스택에서 제거
            if (stack.at(-1) === LEFT[RIGHT.indexOf(target)]) stack.pop();
        }

        // 스택이 비어있다면 + 1
        if (!stack.length) answer += 1
    }
    
    return answer;
}

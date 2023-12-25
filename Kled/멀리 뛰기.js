function solution(n) {
    // 1칸일 때
    if (n === 1) return 1;
    
    let answer = 0;
    let stack = [1, 2];

    // 스택에 쌓아가며 피보나치 수열 구현 
    for (let i = 2; i < n; i += 1) {
      const temp = stack[i - 2] + stack[i - 1];

      // 오버플로우 방지
      stack.push(temp % 1234567)
    }
    
    return stack.pop();
}

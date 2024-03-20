// 스택 문제 중복이네요.

function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    const stackLength = stack.length;
    if (stack[stackLength - 1] === stack[stackLength - 2]) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}

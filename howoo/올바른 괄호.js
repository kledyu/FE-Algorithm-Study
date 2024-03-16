// 알고리즘 스터디에서 한거라서 쉽게 풀었어요

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // 스택에 괄호 push
    stack.push(s[i]);

    // stack의 길이
    const length = stack.length;

    // 마지막 요소가 ")", 이전 요소가 "(" 이면 짝이 맞으므로 pop 2번
    if (stack[length - 2] === '(' && stack[length - 1] === ')') {
      stack.pop();
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

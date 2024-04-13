// stack에서 괄호 맞추기 했던거 + string 회전 으로 풀었습니다.

// 괄호 두개를 받아서 만약 짝이 맞으면 true, 짝이 안맞으면 false를 return
function isPair(b1, b2) {
  if (b1 === '(' && b2 === ')') return true;
  if (b1 === '{' && b2 === '}') return true;
  if (b1 === '[' && b2 === ']') return true;
  return false;
}

// 괄호 규칙이 맞는지 아닌지 판단
// "{[()]}" => true, "}[()]{" ==> false
function checkBracket(string) {
  const stringArray = string.split('');
  const stack = [];

  stringArray.forEach((element) => {
    stack.push(element);

    // stack 맨 위 요소와 그 이전 요소가 짝이 맞으면 pop함
    if (isPair(stack.at(-2), stack.at(-1))) {
      stack.pop();
      stack.pop();
    }
  });

  if (stack.length > 0) return false;
  return true;
}

function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    // 괄호규칙이 맞으면 count 증가
    if (checkBracket(s)) {
      count++;
    }
    s = s.slice(1) + s.slice(0, 1); // 회전
  }
  return count;
}

function solution(s) {
  let count = 0;

  // 여는 괄호는 배열에 push, 닫는 괄호는 case문으로 조건 확인
  // 배열의 마지막 값이 짝이 맞으면 true 반환과 함께 배열의 마지막 값 제거
  // 짝이 다르면 false 반환
  const getIsCorrect = (array, string) => {
    let flag = true;

    switch (string) {
      case ')':
        array.at(-1) !== '(' ? (flag = false) : array.pop();
        break;
      case '}':
        array.at(-1) !== '{' ? (flag = false) : array.pop();
        break;
      case ']':
        array.at(-1) !== '[' ? (flag = false) : array.pop();
        break;
      default:
        array.push(string);
    }

    return flag;
  };

  // s의 길이 횟수 만큼 회전시키는 for문
  for (let i = 0; i < s.length; i += 1) {
    let passed = true;
    const stack = [];

    // 각 문자를 stack에 담으며 짝이 맞는지 여부 확인
    // 하나라도 맞지 않으면 passed가 false가 되며 break로 해당 문자열 검증 종료
    for (let j = 0; j < s.length; j += 1) {
      const isCorrect = getIsCorrect(stack, s[j]);
      if (!isCorrect) {
        passed = false;
        break;
      }
    }

    // passed가 true이고 stack이 비어 있으면 모든 괄호의 짝이 맞으므로 count + 1
    // stack을 비우고, 문자열의 첫 글자를 맨 뒤로 보내서 회전시킴
    if (passed && !stack.length) count += 1;
    stack.length = 0;
    const [first, ...rest] = s;
    s = [...rest, first].join('');
  }

  return count;
}

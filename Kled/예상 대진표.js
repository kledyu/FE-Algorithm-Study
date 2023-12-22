function solution(n, a, b) {
  let answer = 0;

  // 두 선수가 만날 때까지 반복
  while (a !== b) {
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
    
      answer += 1;
  }

  return answer;
}

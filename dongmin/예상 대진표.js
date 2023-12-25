function solution(n, a, b) {
  let answer = 0;

  // 두 참가자의 번호가 모두 1이 될 때까지 반으로 나누기
  while (a - b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer += 1;
  }
  return answer;
}

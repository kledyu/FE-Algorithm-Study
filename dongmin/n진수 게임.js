function solution(n, t, m, p) {
  let answer = '';
  let str = '';
  let num = 0;

  // 모든 차례까지의 n진수 문자열을 연결
  while (str.length < m * t) {
    str += num.toString(n);
    num += 1;
  }

  // 튜브의 차례는 p에 참가인원 m을 계속 더한 수와 같음
  // p + m + m + m + ... + m
  // 인덱스는 0부터 시작이므로 1을 뺀 수를 인덱싱
  for (let i = 0; i < t; i += 1) {
    answer += str[m * i + p - 1];
  }

  return answer.toUpperCase();
}

/*
 *  n: 진수 
 *  t: 길이
 *  m: 참가 인원
 *  p: 시작 순서
 */
function solution(n, t, m, p) {
  let answer = '';
  let index = p - 1;
  let num = 0;
  let targetNumber = num.toString(n);

  while (answer.length < t) {
    if (targetNumber[index]) {
      answer += targetNumber.toString(n)[index];
      index += m;
    }
    num += 1;
    targetNumber += num.toString(n);
  }

  return answer.toUpperCase();
}

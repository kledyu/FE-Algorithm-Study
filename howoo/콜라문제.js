function solution(a = 3, b = 2, n = 20) {
  let answer = 0;
  while (n >= a) {
    const plus = Math.floor(n / a) * b;
    answer += plus;
    n = plus + (n % a);
  }
  return answer;
}

function solution(a, b) {
  let answer = 0;
  // 수학의 가우스 공식을 활용
  // Math.abs를 사용한 이유는 대소관계가 정해지지 않은 상황에서
  // a가 b보다 크면 음수가 나오게 됨.
  answer = ((a + b) * (Math.abs(b - a) + 1)) / 2;
  return answer;
}

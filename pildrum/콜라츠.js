function solution(num) {
  let answer = 0;
  // num이 1이 아닐 경우 반복
  while (num != 1) {
      // num이 짝수일 때
      if (num % 2 == 0) {
          // 2로 나눔
          num /= 2;
      } else {
          // 홀수라면 3을 곱하고 1을 더함
          num = (num * 3) + 1
      }
      // 반복하는 횟수를 카운트
      answer += 1
  }
  // while 문을 돌린 횟수가 500을 넘으면
  if (answer >= 500) {
      // -1 반환
      return -1;
  } else {
      // 아니면 answer 반환
      return answer;
  }
}
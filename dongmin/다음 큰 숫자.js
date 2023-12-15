function solution(n) {
  let answer = n + 1;

  // 2진수로 변환 후 0을 제거한 길이를 반환
  const getLength = (string) => {
    return string.toString(2).replaceAll('0', '').length;
  };

  // 0을 제거한 2진수의 길이가 같아질 때 까지 answer 증가
  while (getLength(answer) !== getLength(n)) {
    answer += 1;
  }

  return answer;
}

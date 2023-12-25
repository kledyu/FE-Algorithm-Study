function solution(arr) {
  const max = Math.max(...arr);
  let answer = max;

  // answer가 arr의 모든 요소로 나누어 떨어질 때 까지 arr의 최대값을 answer에 누적
  while (arr.filter((number) => !(answer % number)).length !== arr.length) {
    answer += max;
  }

  return answer;
}

function solution(numbers, target) {
  let answer = 0;

  const dfs = (idx, result) => {
    // 마지막 숫자까지 계산이 끝났을 때, target과 result가 같은지 확인
    if (idx >= numbers.length) {
      if (result === target) {
        answer += 1;
      }
      return;
    }

    dfs(idx + 1, result + numbers[idx]);
    dfs(idx + 1, result - numbers[idx]);
  };

  dfs(0, 0);

  return answer;
}

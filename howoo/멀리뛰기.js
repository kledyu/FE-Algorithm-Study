function solution(n) {
  return stairRecursion(n);
}

function stairRecursion(n, memo = []) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  // memo에 n번째 값이 존재하면 그 값을 사용
  if (memo[n]) return memo[n];

  // memo에 없는 경우
  const result =
    (stairRecursion(n - 1, memo) + stairRecursion(n - 2, memo)) % 1234567;
  // 결과 값을 memo에 저장
  memo[n] = result;

  return result;
}

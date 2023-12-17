function solution(n) {
  let acc = 0;
  let count = 0;
  for (let i = 1; i <= n; i += 1) {
    // acc가 n보다 같거나 큰 경우 스킵
    if (n <= acc) {
      break;
    }
    // n에서 acc를 뺀 값을 i로 나눈 나머지가 0이면 count+1
    // acc에 값 누적
    if (!((n - acc) % i)) {
      count += 1;
    }
    acc += i;
  }
  return count;
}

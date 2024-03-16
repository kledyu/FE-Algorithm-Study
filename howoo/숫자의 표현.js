function solution(n) {
  let count = 0;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    // j의 초기값을 i로 (1+2+3... 다음 루프 2+3+4... 다음루프 3+4+5... 이렇게 하기 위해
    for (let j = i; j <= n; j++) {
      // sum이 n보다 작으면 계속해서 더함
      if (sum < n) {
        sum = sum + j;
      }

      // sum이 n인 경우 count증가, sum을 0으로 초기화, 내부루프 벗어나고 i++
      if (sum === n) {
        count++;
        sum = 0;
        break;
      }
      // sum이 n보다 크면 이 후의 루프를 도는 것은 무의미함, sum초기화, 내부루프 벗어나고 i++
      if (sum > n) {
        sum = 0;
        break;
      }
    }
  }
  return count;
}

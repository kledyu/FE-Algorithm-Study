function solution(n, left, right) {
  const arr = [];

  // left부터 right까지 구성
  // x좌표는 몫, y좌표는 나머지
  for (let i = left; i <= right; i += 1) {
    const x = Math.trunc(i / n);
    const y = i % n;

    // y좌표의 값이 x좌표의 값과 같거나 크면
    // y + 1 을 push (index는 0부터 시작하므로 1을 더함)
    if (x <= y) {
      arr.push(y + 1);
      continue;
    }

    // y좌표의 값이 x좌표의 값보다 작으면
    // x + 1을 push (index는 0부터 시작하므로 1을 더함)
    arr.push(x + 1);
  }

  return arr;
}

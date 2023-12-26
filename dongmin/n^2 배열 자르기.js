function solution(n, left, right) {
  const arr = [];

  // left부터 right까지 구성
  // x축은 몫, y축은 나머지
  for (let i = left; i <= right; i += 1) {
    const x = Math.trunc(i / n);
    const y = i % n;

    if (x <= y) {
      arr.push(y + 1);
      continue;
    }

    arr.push(x + 1);
  }

  return arr;
}

function solution(brown, yellow) {
  const arr = [];
  const sum = brown + yellow;
  for (let i = 1; i ** 2 <= sum; i += 1) {
    if (sum % i === 0) {
      if (
        i + sum / i === (brown + 4) / 2 &&
        (i - 2) * (sum / i - 2) === yellow
      ) {
        arr.push(Math.max(i, sum / i));
        arr.push(Math.min(i, sum / i));
        break;
      }
    }
  }
  return arr;
}

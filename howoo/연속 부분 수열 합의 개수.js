function solution(arr) {
  // 부분 수열의 합을 저장할 Set
  const sums = new Set();
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += arr[(i + j) % n];
      sums.add(sum);
    }
  }

  return sums.size;
}

function solution(scoville, K) {
  let count = 0;
  const hash = scoville.reduce((a, b) => {
    a[b] = b;
    return a;
  }, {});

  while (Object.values(hash)[0] < K) {
    const arr = Object.values(hash);
    const newFood = arr[0] + arr[1] * 2;
    delete hash[arr[0]];
    delete hash[arr[1]];
    count += 1;
    hash[newFood] = newFood;
  }

  return count;
}

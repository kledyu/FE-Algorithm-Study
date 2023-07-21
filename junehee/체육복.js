function solution(n, originLost, originReverse) {
  let lost = originLost
    .filter((v) => !originReverse.includes(v))
    .sort((a, b) => a - b);
  let reserve = originReverse
    .filter((v) => !originLost.includes(v))
    .sort((a, b) => a - b);

  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i] - 1)) {
      lost = lost.filter((v) => v !== reserve[i] - 1);
    } else if (lost.includes(reserve[i] + 1)) {
      lost = lost.filter((v) => v !== reserve[i] + 1);
    }
  }

  return n - lost.length;
}

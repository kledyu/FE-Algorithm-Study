const prizeMapping = {
  0: 6,
  1: 6,
  2: 5,
  3: 4,
  4: 3,
  5: 2,
  6: 1,
};

function solution(lottos, win_nums) {
  let zeroCount = 0;
  for (let lotto of lottos) {
    if (lotto === 0) {
      zeroCount++;
    }
  }

  let equalCount = 0;
  for (const num of win_nums) {
    for (const lotto of lottos) {
      if (lotto === num) {
        equalCount++;
      }
    }
  }
  const minPrize = prizeMapping[equalCount];
  const maxPrize = prizeMapping[equalCount + zeroCount];

  return [maxPrize, minPrize];
}

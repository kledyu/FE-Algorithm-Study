function solution(s) {
  let transCount = 0;
  let removeZeroCount = 0;

  // s가 1이 될 때까지 반복
  // s에서 0을 제거하면서 removeZeroCount+1
  // 0을 제거한 s의 길이를 2진변환 하면서 transCount+1
  while (s !== '1') {
    const newS = [...s].filter((v) => {
      if (!Number(v)) {
        removeZeroCount += 1;
      } else {
        return v;
      }
    });

    s = newS.length.toString(2);
    transCount += 1;
  }

  return [transCount, removeZeroCount];
}

function solution(n) {
  const arr = [0, 1];

  //현재 인덱스의 전 수와 그 전 수를 합한 수를 1234567로 나눈 수를 배열에 추가
  for (let i = 2; i <= n; i += 1) {
    arr.push((arr[i - 2] + arr[i - 1]) % 1234567);
  }
  return arr[n];
}

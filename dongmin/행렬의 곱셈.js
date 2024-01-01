function solution(arr1, arr2) {
  const answer = [];

  // i : 좌측 행렬의 세로 길이
  // j : 우측 행렬의 가로 길이
  // k : 우측 행렬의 세로 길이
  for (let i = 0; i < arr1.length; i += 1) {
    const arr = [];
    for (let j = 0; j < arr2[0].length; j += 1) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k += 1) {
        sum += arr1[i][k] * arr2[k][j];
      }
      arr.push(sum);
    }
    answer.push(arr);
  }
  return answer;
}

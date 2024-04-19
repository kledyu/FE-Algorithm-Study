function solution(arr1, arr2) {
  const answer = [];

  const arr1Row = arr1.length;
  const arr1Col = arr1[0].length;
  const arr2Col = arr2[0].length;

  for (let i = 0; i < arr1Row; i++) {
    const temp = [];
    for (let j = 0; j < arr2Col; j++) {
      let sum = 0;
      for (let k = 0; k < arr1Col; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      temp.push(sum);
    }
    answer.push(temp);
  }

  return answer;
}

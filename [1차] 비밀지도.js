function solution(n, arr1, arr2) {
  const temp = [];
  for (let i = 0; i < n; i++) {
    temp.push(arr1[i] | arr2[i]);
  }
  const padTemp = temp.map((el) => el.toString(2).padStart(n, 0));
  const answer = padTemp.map((el) =>
    el.replace(/1/g, '#').replace(/0/g, ' ')
  );
  return answer;
}

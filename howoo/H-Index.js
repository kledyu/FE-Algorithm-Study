function solution(arr) {
  arr.sort((a, b) => b - a);

  let hIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= i + 1) {
      hIndex = i + 1;
    } else {
      break;
    }
  }
  return hIndex;
}

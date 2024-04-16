// 메모리으로 실패
function solution(n, left, right) {
  // 0으로 채워진 매트릭스를 만듬
  const matrix = [];
  const row = Array.from({ length: n }).fill(0);
  for (let i = 0; i < n; i++) {
    matrix.push(row);
  }
  // [
  //   [0, 0, 0],
  //   [0, 0, 0],
  //   [0, 0, 0],
  // ]

  // 원하는 모양으로 만듬
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        matrix[i][j] = i + 1;
      }
      if (i > j) {
        matrix[i][j] = i + 1;
      }
      if (j > i) {
        matrix[i][j] = j + 1;
      }
    }
  }
  // [
  //   [1, 2, 3],
  //   [2, 2, 3],
  //   [3, 3, 3],
  // ]

  // 납작하게 만듬
  const flatMatrix = [];
  for (let i = 0; i < n; i++) {
    flatMatrix.push(...matrix[i]);
  }
  // [ 1, 2, 3, 2, 2, 3, 3, 3, 3 ]

  return flatMatrix.slice(left, right + 1);
}

// 매트릭스를 생성하지 않고 좌표만으로 결과를 내는 방법을 사용해야함

// 1 2 3
// 2 2 3
// 3 3 3

// (x, y) 좌표값에서 큰값에 + 1 을 하면 해당 좌표의 값이 된다.

// left = 2인 값의 좌표는 어떻게 구할 것인가?
// col = 2 % 3 = 2
// row = Math.floor(2 / 3)

function solution(n, left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    const max = Math.max(row, col);
    result.push(max + 1);
  }

  return result;
}

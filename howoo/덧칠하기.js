function solution(n, m, section) {
  const wall = new Array(n).fill(1); // 1로 채운 길이 n의 배열
  section.forEach((element) => {
    wall[element - 1] = 0; // section에 해당하는 부분 0으로 채움
  });

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (wall[i] === 0) {
      // 첫번째 발견되는 0부터 m번 1로 바꿔줌
      for (let j = 1; j <= m; j++) {
        wall[i + j - 1] = 1;
      }
      count++;
      i = i + m - 1; // 바뀐 부분은 점프
    }
  }

  return count;
}

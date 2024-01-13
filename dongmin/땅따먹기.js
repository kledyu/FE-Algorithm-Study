function solution(land) {
  // 각 행의 최고값을 다음 행의 원소에 더함
  // 단 같은 인덱스의 값은 더할 수 없으므로 filter로 제외
  for (let i = 0; i < land.length - 1; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      const filteredIndex = [0, 1, 2, 3].filter((v) => v !== j);
      const [idx1, idx2, idx3] = filteredIndex;

      land[i + 1][j] += Math.max(land[i][idx1], land[i][idx2], land[i][idx3]);
    }
  }

  return Math.max(...land.at(-1));
}

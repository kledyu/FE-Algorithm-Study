function solution(k, m, score) {
  const temp = [];
  score.sort((a, b) => b - a);
  for (let i = 0; i < Math.floor(score.length / m); i++) {
    temp.push(score[m * (i + 1) - 1]);
  }

  return temp.reduce((acc, curr) => acc + curr, 0) * m;
}

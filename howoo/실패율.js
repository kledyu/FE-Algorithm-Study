function solution(N, stages) {
  const result = [];
  for (let i = 1; i <= N; i++) {
    const solved = stages.filter((stage) => stage >= i).length;
    const stuck = stages.filter((stage) => stage === i).length;
    result.push([i, stuck / solved]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}

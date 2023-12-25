function solution(elements) {
  const sumAll = elements.reduce((a, b) => a + b);
  const answer = new Set();

  for (let i = 1; i <= elements.length; i += 1) {
    for (let j = 0; j + i <= elements.length; j += 1) {
      const newArrSum = elements.slice(j, j + i).reduce((a, b) => a + b);
      answer.add(newArrSum);
      sumAll - newArrSum && answer.add(sumAll - newArrSum);
    }
  }
  return answer.size;
}

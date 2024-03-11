function solution(s) {
  const numbersArr = s.split(' ').map(Number);
  const max = Math.max(...numbersArr);
  const min = Math.min(...numbersArr);

  const answer = `${min} ${max}`;
  return answer;
}

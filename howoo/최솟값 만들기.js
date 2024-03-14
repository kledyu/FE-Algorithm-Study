function solution(A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => a - b);

  let answer = 0;

  sortedA.forEach((element, i) => {
    answer += element * sortedB[sortedB.length - 1 - i];
  });
  return answer;
}

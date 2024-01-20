function solution(k, score) {
  const answer = [];
  const fame = [];

  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      fame.push(score[i]);
      fame.sort((a, b) => b - a);
      answer.push(fame.at(-1));
    } else {
      fame.push(score[i]);
      fame.sort((a, b) => b - a);
      fame.pop();
      answer.push(fame.at(-1));
    }
  }
  return answer;
}

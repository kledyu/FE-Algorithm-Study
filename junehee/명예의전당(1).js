function solution(k, score) {
  let answer = [];
  let stack = [];

  score.forEach(v => {
    stack.push(v)
    stack.sort((a, b) => b - a)
    if (stack.length >= k) {
        answer.push(stack[k-1]) // 명예의 전당의 길이보다 점수가 많을 경우
    } else {
        answer.push(stack[stack.length-1])
    }
  })

  return answer;
}

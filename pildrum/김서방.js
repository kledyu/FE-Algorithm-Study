function solution(seoul) {
  // seoul이라는 배열에는 Kim 하나만 있음.
  // 그래서 Kim을 찾을 수 있는 첫번째 인덱스를 indexOf로 반환.
  let idx = seoul.indexOf('Kim');
  return `김서방은 ${idx}에 있다`;
}
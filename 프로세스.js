function solution(priorities, location) {
  let answer = 0;
  let popped;
  let indexArray = Array.from({ length: priorities.length }, (_, idx) => idx);

  // location과 indexArray에서 pop된 index가 같을 때 까지
  while (popped !== location) {

    // priorities의 가장 첫 요소가 최고 우선순위가 아니면 맨 뒤로 보냄
    if (priorities.at(0) !== Math.max(...priorities)) {
      const [first, ...rest] = priorities;
      const [firstIdx, ...restIdx] = indexArray;
      priorities = [...rest, first];
      indexArray = [...restIdx, firstIdx];

    // priorities의 가장 첫 요소가 최고 우선순위면
    // 해당 요소를 제거하고 answer + 1
    } else {
      priorities.shift();
      popped = indexArray.shift();
      answer += 1;
    }
  }
  return answer;
}

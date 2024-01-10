function solution(numbers) {
  const indexStack = [];
  const answer = new Array(numbers.length).fill(-1);

  // index를 stack에 담는다
  // stack에 가장 마지막에 담긴 index와 현재 index를 비교
  // 현재 index의 값이 더 크면 stack에서 pop한 index에 현재 index의 값 입력
  // 이후 다시 stack에 index 담기
  for (let index = 0; index < numbers.length; index += 1) {
    const currentIndex = numbers[index];

    while (indexStack.length && numbers[indexStack.at(-1)] < currentIndex) {
      answer[indexStack.pop()] = currentIndex;
    }

    indexStack.push(index);
  }

  return answer;
}

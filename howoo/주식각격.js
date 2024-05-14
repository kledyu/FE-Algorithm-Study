function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);

  // 특정 조건의 prices의 인덱스를 담는 스택
  const stack = [];

  for (let i = 0; i < n; i++) {
    // 스택의 길이가 0보다 크고, 현재 선택한 가격보다 스택의 마지막 요소의 인덱스의 가격이 크면(가격이 떨어졌다는 의미)
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      // 가격이 떨어진 인덱스를 없에고 변수에 담음
      const idx = stack.pop();
      // 정답 배열에 현재 i에서 가격이 떨어진 인덱스의 가격을 빼서 저장
      answer[idx] = i - idx;
    }
    stack.push(i);
  }

  // 위 단계 까지 진행하면
  // stack에는 [0, 1, 3, 4]
  // answer에는 [0, 0, 1, 0, 0]
  // 이 담겨 있음

  // answer에 0이 담겼다는 것은 가격이 내려가지 않았다는 의미

  while (stack.length > 0) {
    const idx = stack.pop();
    answer[idx] = n - idx - 1;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));

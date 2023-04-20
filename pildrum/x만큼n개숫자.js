function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

/*
  풀이
  x가 2이고 n이 5라고 가정했을 때,
  1부터 5까지 곱한 값을 answer라는 빈 배열에 원소로 넣음
*/

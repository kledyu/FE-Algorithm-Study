// 재귀, 시간초과, 재귀 방법 외에 생각이 나지 않아서 정답 봤습니다.
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1);
}


// 배열 사용
function solution(n) {
  return fibonacci(n) % 1234567;
}

function solution(n) {
  let answer = 0;

  let fibonacciArr = new Array(n);

  fibonacciArr[0] = 0;
  fibonacciArr[1] = 1;
  fibonacciArr[2] = 1;

  console.log(fibonacciArr);
  for (let i = 3; i <= n; i++) {
    // 숫자가 너무 커지기 때문에 여기에서 나머지 연산을 해야함
    // (finonaccip[n] + finonaccip[n+1]) % 1234567 과 (finonaccip[n] % 1234567 + finonaccip[n+1] % 1234567) 은 같기 때문에 이렇게 해도 괜찮음 
    fibonacciArr[i] = (fibonacciArr[i - 1] + fibonacciArr[i - 2]) % 1234567;
  }

  answer = fibonacciArr[n];

  return answer;
}
